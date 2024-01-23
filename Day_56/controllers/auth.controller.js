const bcrypt = require("bcrypt");
const { string } = require("yup");
const db = require("../models/index");
module.exports = {
  login: (req, res) => {
    return res.render("auth/login", { req });
  },

  handleLogin: async (req, res) => {
    try {
      // Xác thực dự liệu gửi từ login form tự làm

      const { email, password } = req.body;

      // Kiểm tra tài khoản đã đăng ký hay chưa
      const user = await db.User.findOne({ email: email });

      if (!user) {
        return res.render("auth/login", {
          error: "Email hoặc mật khẩu không đúng",
        });
      }

      const isCorrectPassword = await bcrypt.compare(user.password, password);

      if (!isCorrectPassword) {
        return res.render("auth/login", {
          error: "Email hoặc mật khẩu không đúng",
        });
      }
    } catch (error) {}
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

    const user = await db.User.create({
      name: body.name,
      email: body.email,
      password: body.password,
      status: body.status === "1",
    });

    return res.redirect("/auth/login");

    // const user = await User.create({
    //   name: body.name,
    //   email: body.email,
    //   password: body.password,
    //   status: body.status === "1",
    // });
    // console.log(user);
  },
};
