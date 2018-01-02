const jwt = require("jsonwebtoken");

module.exports = user => jwt.sign({ userId: user.id, }, process.env.SECRET, { expiresIn: '3d' })