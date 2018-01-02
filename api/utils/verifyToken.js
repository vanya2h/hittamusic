const jwt = require("jsonwebtoken");

export default (token, cb) => {
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (!err && decoded) {
      return cb(decoded.userId);
    } else {
      return cb(false);
    }
  });
};
