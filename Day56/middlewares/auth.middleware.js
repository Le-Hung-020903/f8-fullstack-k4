const { User } = require("../models/index");

module.exports = async (req, res, next) => {
  const currentUser = req.session.user;

  if (!currentUser) {
    return res.redirect("/auth/login");
  }

  const user = await User.findOne({
    where: {
      id: currentUser.id,
      status: true,
    },
  });

  if (!user) {
    req.session.destroy();
    return res.redirect("/auth/login");
  }

  next();
};
