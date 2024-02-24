const { Link } = require("../models/index");
const shortid = require("shortid");
const QRCode = require("qrcode");
module.exports = {
  index: async (req, res) => {
    const links = await Link.findAll();
    res.render("index", { links });
  },
  handleLink: async (req, res) => {
    const { originalLink, password } = req.body;
    const shortCode = shortid.generate({ length: 11 });
    const shortUrl = `${process.env.URL_HOST}/${shortCode}`;
    await Link.create({
      shortLink: shortUrl,
      originalLink,
      password,
    });
    res.render("index");
  },
  handleShortCode: async (req, res) => {
    const { shortCode } = req.params;
    const shortLink = req.protocol + "://" + req.get("host") + `/${shortCode}`;
    const link = await Link.findOne({ where: { shortLink } });
    res.render("links/index", { link, error: null, isVerifiedPassword: false });
  },

  handleVerifyPassword: async (req, res) => {
    const { password } = req.body;
    const { shortCode } = req.params;

    const shortLink = req.protocol + "://" + req.get("host") + `/${shortCode}`;
    const link = await Link.findOne({ where: { shortLink } });

    if (link.password !== password) {
      const error = "Invalid password";
      return res.render("links/index", {
        link,
        error,
        isVerifiedPassword: false,
      });
    }
    const linkQR = link.originalLink;
    const qrCode = await QRCode.toDataURL(linkQR);

    res.render("links/index", {
      link,
      error: null,
      isVerifiedPassword: true,
      qrCode: qrCode,
    });
  },
};
