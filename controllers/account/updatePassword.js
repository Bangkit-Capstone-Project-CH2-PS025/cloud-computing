const { User } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    const findAccount = await User.findOne({
      where: { id: req.user.id },
    });

    if (!findAccount) {
      return res.status(404).json({
        status: false,
        message: "Account not found",
      });
    }

    const { password } = req.body;

    if (password.length < 8) {
      return res.status(400).json({
        status: false,
        message: "password must be at least 8 characters",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.update(
      {
        password: hashedPassword,
      },
      { where: { id: req.user.id } }
    );

    return res.status(200).json({
      status: true,
      message: "Password updated",
    });
  } catch (error) {
    next(error);
  }
};
