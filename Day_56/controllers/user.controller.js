const { User } = require("../models/index");

module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    console.log(users);
    res.end("users index");
  },
};
