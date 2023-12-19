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

    const { old_password, new_password } = req.body;

    const checkPassword = await bcrypt.compare(old_password, findAccount.password);

    if (!checkPassword) {
      return res.status(401).json({
        status: false,
        message: "password is wrong",
      });
    }

    if (new_password.length < 8) {
      return res.status(400).json({
        status: false,
        message: "password must be at least 8 characters",
      });
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);

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
