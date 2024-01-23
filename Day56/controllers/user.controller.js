const { User } = require("../models/index");
const { Op } = require("sequelize");
module.exports = {
  index: async (req, res) => {
    const { keyword, status } = req.query;
    const where = {};
    if (status === "active" || status === "inactive") {
      where.status = status === "active";
    }
    if (keyword) {
      where[Op.or] = {
        name: {
          [Op.like]: `%${keyword}%`,
        },
        email: {
          [Op.like]: `%${keyword}%`,
        },
      };
    }
    const users = await User.findAll({
      where,
      order: [["id", "desc"]],
    });
    // const msg = req.flash("msg");
    // console.log(msg);

    res.render("users/index", { users });
  },
  add: (req, res) => {
    res.render("users/add");
  },
  handleAdd: async (req, res) => {
    const { name, email, password, status } = req.body;
    const user = await User.create({
      name: name,
      email: email,
      password: password,
      status: status === "1",
    });
    // req.flash("msg", "Tạo tài khoản thành công");
    return res.redirect("/users");
  },
};
