const development = require("./config.development");
const production = require("./config.production");

module.exports = process.env.NODE_ENV === "production" ? production : development;