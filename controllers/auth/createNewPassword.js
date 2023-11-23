const { User } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    const token = req.query;

    const { newPassword, confirmNewPassword } = req.body;

    const findUser = await User.findOne({ where: { email_token: token } });

    if (!findUser) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        status: false,
        message: "new password and confirm new password is not same",
      });
    }

    const hash = await bcrypt.hash(newPassword, 10);

    const user = await User.update(
      {
        password: hash,
      },
      { where: { id: verify.id } }
    );

    return res.status(200).json({
      status: true,
      message: "password has been updated",
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};
