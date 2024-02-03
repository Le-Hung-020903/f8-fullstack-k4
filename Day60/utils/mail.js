"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.DB_EMAIL,
    pass: process.env.DB_PASSWORDEMAIL,
  },
});

module.exports = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: '"Lê Đình Hùng 👻" <ledinhhung02092003@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    html: message, // html body
  });
  return info;
};
