const { User } = require("../models/index");
const { compare } = require("../helpers/bcrypt.js");
const { sign } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
class UserController {
  static async register(req, res, next) {
    const { email } = req.body;
    try {
      const newUser = await User.create(req.body);
      res.status(201).json({
        id: newUser.id,
        email,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email) throw { name: "EMAIL_EMPTY" };
      if (!password) throw { name: "PASSWORD_EMPTY" };

      const user = await User.findOne({
        where: { email },
      });
      console.log("pengecekan", user);
      if (!user) throw { name: "LOGIN_ERROR" };
      if (!compare(password, user.password)) throw { name: "LOGIN_ERROR" };
      const access_token = sign({ email: user.email });
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }
  static googleLogin(req, res, next) {
    const { id_token } = req.body;
    let payload;
    client
      .verifyIdToken({
        idToken: id_token,
        audience: process.env.CLIENT_ID,
      })
      .then((ticket) => {
        payload = ticket.getPayload();
        return User.findOne({
          where: {
            email: payload.email,
          },
        });
      })
      .then((user) => {
        if (!user) {
          const newUser = {
            username: payload.name,
            email: payload.email,
            password: "kebobalamung172",
            phoneNumber: "0000000",
            address: "indonesia",
            role: "customer",
          };
          return User.create(newUser);
        } else {
          return user;
        }
      })
      .then((data) => {
        const accessToken = sign({
          email: data.email,
          id: data.id,
          role: data.role,
        });
        res.status(200).json({
          id: data.id,
          name: data.username,
          role: data.role,
          message: "Success Sign In With Google",
          Token: accessToken,
        });
      })
      .catch((err) => next(err));
  }
}

module.exports = UserController;
