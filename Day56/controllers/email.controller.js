const { Email } = require("../models/index");
const { Op } = require("sequelize");
const { string } = require("yup");
const sendEmail = require("../utils/mail");
module.exports = {
  email: (req, res) => {
    const errorEmail = req.flash("errorEmail");
    const successEmail = req.flash("successEmail");
    return res.render("email/email", { req, successEmail, errorEmail });
  },
  handleEmail: async (req, res) => {
    const body = await req.validate(req.body, {
      email_address: string().required("Email đến bắt buộc phải nhập"),
      email_title: string().required("Tiêu đề bắt buộc phải nhập"),
    });
    try {
      await sendEmail(body.email_address, body.email_title, body.email_content);
      await Email.create({
        email_address: body.email_address,
        title: body.email_title,
        content: body.email_content,
      });
      req.flash("successEmail", "Gửi email thành công");
    } catch (e) {
      req.flash("errorEmail", "Gửi email không thành công");
    }
    return res.render("email/email", { req });
    // return res.redirect("/");
  },
  history: async (req, res) => {
    const emails = await Email.findAll({
      order: [["id", "DESC"]],
    });
    return res.render("email/historyEmail", { emails });
  },
  content: async (req, res) => {
    const { id } = req.params;
    const content = await Email.findByPk(id);
    return res.render("email/contentEmail", { content });
  },
};
