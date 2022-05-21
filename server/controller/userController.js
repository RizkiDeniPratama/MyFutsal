const { User } = require("../models/index");
const { compare } = require("../helpers/bcrypt.js");
const { sign } = require("../helpers/jwt");
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
}
module.exports = UserController;
