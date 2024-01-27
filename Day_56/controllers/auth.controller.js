const bcrypt = require("bcrypt");
const { string } = require("yup");
const { User } = require("../models/index");
module.exports = {
  login: (req, res) => {
    const userNotFound = req.flash("userNotFound");
    const passwordIncorrect = req.flash("passwordIncorrect");
    return res.render("auth/login", { req, userNotFound, passwordIncorrect });
  },

  handleLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        req.flash("userNotFound", "Email hoặc mật khẩu không tồn tại");
        return res.render("auth/login");
      }
      const isCorrectPassword = await bcrypt.compare(user.password, password);
      if (!isCorrectPassword) {
        req.flash(
          "passwordIncorrect",
          "Mật khẩu không đúng. Vui lòng nhập lại"
        );
        return res.render("auth/login");
      }
    } catch (e) {
      return next(e);
    }
  },

  resgister: (req, res) => {
    return res.render("auth/resgister", { req });
  },

  handleResgister: async (req, res) => {
    console.log("test");
    const body = await req.validate(req.body, {
      name: string().required("Tên bắt buộc phải nhập"),
      email: string().required("Email bắt buộc phải nhập"),
      // .email("Email không đúng định dạng").test('check email', 'Email đã tồn tại trên hệ thống', (value) =>{
      //   return
      // })
      password: string().required("Password bắt buộc phải nhập"),
      status: string().test("check-status", "Status không hợp lệ", (value) => {
        return +value === "1" || +value === "0";
      }),
    });
    // if (!body) return res.render("auth/resgister", { req });
    if (body) {
      const user = await User.create({
        name: body.name,
        email: body.email,
        password: body.password,
        status: body.status === "1",
      });
    }
    return res.redirect("/auth/login");
  },
};
