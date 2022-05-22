const { verify } = require("../helpers/jwt");
const { User, FieldList, VenueFutsal } = require("../models");

module.exports = {
  authentication(req, res, next) {
    try {
      const accessToken = req.get("accessToken");
      const decoded = verify(accessToken);
      console.log("ini decoded", decoded);
      console.log("ini token", accessToken);
      User.findOne({
        where: {
          email: decoded.email,
        },
      })
        .then((data) => {
          console.log(data);
          req.user = {
            id: data.id,
            email: data.email,
            role: data.role,
          };
          next();
        })
        .catch((err) => next(err));
    } catch (error) {
      next(error);
    }
  },

  authorization(req, res, next) {
    if (req.user.role === "admin") {
      next();
    } else {
      Product.findByPk(req.params.productsId)
        .then((product) => {
          if (req.user.id === product.authorId) {
            console.log(" bsa lah");
            next();
          } else {
            throw { name: "NO_PERMISSION" };
          }
        })
        .catch((err) => next(err));
    }
  },
};
