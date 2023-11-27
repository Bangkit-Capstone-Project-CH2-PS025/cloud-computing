const { User } = require("../../models");
const { VERIFIED } = require("../../handlers/enum.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const { usernameOrEmail, password } = req.body;

    const isEmail = usernameOrEmail.includes("@");

    const user = await User.findOne({
      where: { [isEmail ? "email" : "username"]: usernameOrEmail },
    });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    if (user.is_verified === VERIFIED.FALSE) {
      return res.status(401).json({
        status: false,
        message: `you are not verified, please check your email in message box or spam and then verify your account`,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        message: "password doesn't match",
      });
    }

    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    return res.status(200).json({
      status: true,
      message: "login successful",
      data: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};
