const jwt = require("jsonwebtoken");
const User = require("../model/User");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return next(new ErrorResponse("Unauthorized User!", 401));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) return next(new ErrorResponse("No User Found!", 404));

    req.user = user;

    next();
  } catch (error) {
    // error
    console.log();
    // return next();
    return next(new ErrorResponse(error));
  }
};
