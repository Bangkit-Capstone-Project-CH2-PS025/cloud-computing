require("dotenv").config();
const { User } = require("../../models");
const { ROLE, VERIFIED } = require("../../handlers/enum.js");
const { sendEmail } = require("../../utils/email/email.js");
const { PORT, IP_ADDRESS } = process.env;
// const activateAccount = require("../../utils/email/activateAccountEmail.js");
const bcrypt = require("bcrypt");
const crypto = require("node:crypto");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const activateAccount = async ({ link, name }) => {
  const templatePath = path.join(
    __dirname,
    "..",
    "..",
    "views",
    "activateAccountEmail.ejs"
  );
  const template = fs.readFileSync(templatePath, "utf-8");
  const renderedTemplate = ejs.render(template, {
    link,
    name,
    year: new Date().getFullYear(),
  });

  return renderedTemplate;
};

module.exports = async (req, res, next) => {
  try {
    const { name, email, username, password } = req.body;

    const findEmail = await User.findOne({ where: { email } });

    const findUsername = await User.findOne({ where: { username } });

    if (findEmail || findUsername) {
      return res.status(409).json({
        status: false,
        message: "email or username already exist",
      });
    }

    if (username.length < 6) {
      return res.status(400).json({
        status: false,
        message: "username must be at least 6 characters",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        status: false,
        message: "password must be at least 8 characters",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString("hex");

    const created = await User.create({
      name,
      email,
      email_token: token,
      username,
      password: hashedPassword,
      role: ROLE.USER,
      xp: 0,
      level_id: 1,
      is_verified: VERIFIED.FALSE,
    });

    const templateEmail = {
      to: email.toLowerCase(),
      subject: "Activate Your Account!",
      html: await activateAccount({
        link: `http://${IP_ADDRESS}:${PORT}/auth/verify-account?token=${token}`,
        name: created.name,
      }),
    };

    await sendEmail(templateEmail);

    return res.status(201).json({
      status: true,
      message: "successfuly create a new user",
      data: {
        name: created.name,
        email: created.email,
        email_token: token,
        username: created.username,
        password: created.password,
        role: created.role,
        is_verified: created.is_verified,
      },
    });
  } catch (error) {
    next(error);
  }
};
