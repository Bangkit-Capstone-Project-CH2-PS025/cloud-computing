require("dotenv").config();
const { User } = require("../../models");
const { ROLE, VERIFIED } = require("../../handlers/enum.js");
const { sendEmail } = require("../../utils/email/email.js");
const activateAccount = require("../../utils/email/activateAccountEmail.js");
const bcrypt = require("bcrypt");
const crypto = require("node:crypto");

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
      is_verified: VERIFIED.FALSE,
    });

    const templateEmail = {
      to: email.toLowerCase(),
      subject: "Activate Your Account!",
      html: activateAccount(`http://localhost:8000`),
    };

    await sendEmail(templateEmail);

    return res.status(201).json({
      status: true,
      message: "create new user successful",
      data: {
        name: created.name,
        email: created.email,
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
