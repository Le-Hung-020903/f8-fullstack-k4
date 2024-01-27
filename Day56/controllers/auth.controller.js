const { User, Device } = require("../models/index");
const { string, ref } = require("yup");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const DeviceDetector = require("device-detector-js");

module.exports = {
  index: (req, res) => {
    return res.render("/");
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
    const userAgent = req.headers["user-agent"];
    const deviceDetector = new DeviceDetector();
    const infoDevice = deviceDetector.parse(userAgent);

    const device = await Device.findOne({
      where: {
        ip: req.ip,
        user_id: user.id,
      },
    });

    if (device) {
      await device.update(
        {
          name: infoDevice.os.name,
          browsers: infoDevice.client.name,
        },
        { where: { id: device.id } }
      );
    } else {
      await Device.create({
        name: infoDevice.os.name,
        browsers: infoDevice.client.name,
        ip: req.ip,
        user_id: user.id,
      });
    }
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
  logout: async (req, res) => {
    req.session.destroy();
    return res.redirect("/auth/login");
  },
  changePassword: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/auth/login");
    }
    const changeFaied = req.flash("changeFaied");
    return res.render("auth/changePassword", { req, changeFaied });
  },
  handleChangePassword: async (req, res) => {
    const body = await req.validate(req.body, {
      oldPassword: string().required("Mật khẩu cũ bắt buộc phải nhập"),
      newPassword: string().required("Mật khẩu mới bắt buộc phải nhập"),
      confirmNewPassword: string()
        .oneOf([ref("newPassword")], "Xác nhận mật khẩu không chính xác")
        .required("Xác nhận mật khẩu mới bắt buộc phải nhập"),
    });
    if (!body) {
      return res.redirect("/auth/changePassword");
    }
    const id = req?.session?.user?.id;
    const userActive = await User.findByPk(id);
    const isMatch = await bcrypt.compare(body.oldPassword, userActive.password);

    if (!isMatch) {
      req.flash("changeFaied", "Mật khẩu cũ không đúng");
      return res.redirect("/auth/changePassword");
    }
    const newPasswordHash = await bcrypt.hash(body.newPassword, 10);
    await User.update(
      {
        password: newPasswordHash,
        status: false,
      },
      {
        where: {
          id,
        },
      }
    );
    req.session.destroy();
    return res.redirect("/auth/login");
  },
  device: async (req, res) => {
    const userId = req?.session?.user?.id;
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Device,
          as: "devices",
        },
      ],
    });
    res.render("infoBrowser", { devices: user.devices });
  },
};
