const mongoose = require('mongoose');
const mapUser = require("../utils/mapUser");
const createToken = require("../utils/createToken");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: { type: String, required: true, },
  password: { type: String, required: true, },
  created: { type: Date, default: Date.now }
});

const User = mongoose.models.User 
  || mongoose.model("User", UserSchema);

User.getUser = query => User
  .findOne(query)
  .then(User => mapUser(User));

User.getUserRaw = query => User
  .findOne(query)

User.getUsers = (query, params) => User
  .find(query, null, params)
  .then(Users => Users.map(User => mapUser(User)));

User.createUser = newUser => User
  .create(newUser)
  .then(createdUser => mapUser(createdUser));

User.updateUser = (query, values) => User
  .findOneAndUpdate(query, values, { new : true })
  .then(updatedUser => mapUser(updatedUser));

User.removeUser = (query) => User
  .remove(query);

User.signUser = login => User
  .getUser({ login })
  .then((user) => ({ user, token: createToken(user) }))

module.exports = User;