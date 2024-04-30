const HttpStatus = require("../constant/HTTPStatus");

const errorHandler = (err, req, res, next) => {
  console.error(err); // 에러 로깅
  res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
