const { User } = require("../models/index");
const { string } = require("yup");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = {
  index: (req, res) => {
    return res.render("auth/login");
  },
  login: (req, res) => {
    const successMsg = req.flash("successMsg");
    const errorMsg = req.flash("errorMsg");
    if (req.session.user) {
      return res.redirect("/");
    }
    return res.render("auth/login", { req, successMsg, errorMsg });
  },
  handleLogin: async (req, res) => {
    const body = await req.validate(req.body, {
      email: string().required("Email bắt buộc phải nhập"),
      password: string().required("Password bắt buộc phải nhập"),
    });
    if (!body) {
      req.flash("errorMsg", "Đăng nhập thất bại");
      return res.redirect("/auth/login");
    }
    const user = await User.findOne({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      req.flash("errorMsg", "Đăng nhập thất bại");
      return res.redirect("/auth/login");
    }
    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
      req.flash("errorMsg", "Tài khoản hoặc mật khẩu không đúng");
      return res.redirect("/auth/login");
    }
    req.session.user = user;
    return res.redirect("/");
  },
  register: (req, res) => {
    const errorMsg = req.flash("errorMsg");
    if (req.session.user) {
      return res.redirect("/");
    }
    return res.render("auth/register", { req, errorMsg });
  },
  handleRegister: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string().required("Tên bắt buộc phải nhập"),
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng")
        .test("check email", "Email đã tồn tại", async (email) => {
          const result = await User.findOne({
            where: {
              email: {
                [Op.iLike]: `%${email}%`,
              },
            },
          });
          if (result) {
            return false;
          }
          return true;
        }),
      password: string().required("Mật khẩu bắt buộc phải nhập"),
    });
    if (body) {
      const passwordHash = await bcrypt.hash(body.password, 10);
      const user = await User.create({
        name: body.name,
        email: body.email,
        password: passwordHash,
      });
      req.flash("successMsg", "Đăng ký tài khoản thành công");
      return res.redirect("/auth/login");
    } else {
      req.flash("errorMsg", "Đăng ký tài khoản thất bại");
    }
    return res.redirect("/auth/register");
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/auth/login");
  },
};
