const userModel = require("../models/user");
const { string } = require("yup");
module.exports = {
  index: async (req, res, next) => {
    try {
      let { status, keyword } = req.query;
      const users = await userModel.all(status, keyword);
      res.render("users/index", { users });
      // res.json(users)
    } catch (err) {
      return next(err);
    }
  },
  add: (req, res) => {
    res.render("users/add", { req });
  },
  handleAdd: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string().required("Ten bat buoc phai nhap"),
      email: string()
        .required("Email bat buoc phai nhap")
        .email("Email khong dung dinh dang")
        .test("check-email", "Email Da ton tai", async (value) => {
          const result = await userModel.checkEmail(value);
          return !result.length;
        }),
      status: string().test(
        "check-status",
        "Trang thai khong hop le",
        (value) => {
          // value = +value;
          // if (!isNaN(value) && (value === 0 || value === 1)) {
          //   return true;
          // } else {
          //   return false;
          // }
          return +value === 1 || +value === 0;
        }
      ),
    });
    if (body) {
      await userModel.create(body);
      req.flash("success", "Them nguoi dung thanh cong");
      return res.redirect("/users");
    }
    return res.redirect("/users/add");
  },
  edit: async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const users = await userModel.getUser(userId);
    res.render("users/edit", { user: users[0], req });
  },
  handleEdit: async (req, res) => {
    const userId = req.params.id;
    const body = await req.validate(req.body, {
      name: string().required("Ten bat buoc phai nhap"),
      email: string()
        .required("Email bat buoc phai nhap")
        .email("Email khong dung dinh dang"),
      status: string().test(
        "check-status",
        "Trang thai khong hop le",
        (value) => {
          return +value === 1 || +value === 0;
        }
      ),
    });
    if (body) {
      await userModel.update({ ...body, id: userId });
      req.flash("success", "Sua nguoi dung thanh cong");
      return res.redirect("/users");
    }
    return res.redirect(`/users/edit/${userId}`);
  },
  delete: async (req, res) => {
    const userId = req.params.id;
    const users = await userModel.getUser(userId);
    res.render("users/delete", { user: users[0] });
  },
  handleDelete: async (req, res) => {
    const userId = req.params.id;
    const deleteUser = await userModel.delete(userId);
    return res.redirect("/users");
  },
};
