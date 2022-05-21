module.exports = (err, req, res, next) => {
  console.log("ini err dari server", err);
  let check = err.name;
  let statusCode;
  let errMessage;
  switch (check) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      statusCode = 400;
      errMessage = err.errors.map((el) => el.message);
      break;
    case "LOGIN_ERROR":
      statusCode = 401;
      errMessage = "Ada kesalahan saat login atau register";
      break;
    case "EMAIL_EMPTY":
    case "PASSWORD_EMPTY":
      statusCode = 401;
      errMessage = "Email or Password Empty";
      break;
    case "JsonWebTokenError":
      statusCode = 401;
      errMessage = "Token nya tidak ada";
      break;
    case "NO_PERMISSION":
      statusCode = 403;
      errMessage = "Kamu tidak ada akses untuk produk ini";
      break;
    case "NOT_PRODUCT":
      statusCode = 404;
      errMessage = "Product yang anda cari tidak ada";
      break;
    default:
      statusCode = 500;
      errMessage = "Internal Server err";
      break;
  }
  res.status(statusCode).json({ message: errMessage });
};
