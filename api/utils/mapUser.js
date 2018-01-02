module.exports = user => user ? ({
  id: user._id,
  login: user.login,
  created: user.created,
}) : null;