const { User } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = {
  resetPassword: async (req, res, next) => {
    try {
      const { email_token } = req.params;

      const { newPassword, confirmNewPassword } = req.body;
      console.log("password : ", newPassword);
      console.log(confirmNewPassword);

      const findUser = await User.findOne({ where: { email_token } });

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

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      const user = await User.update(
        {
          password: hashedPassword,
        },
        { where: { email_token } }
      );

      return res.redirect("/");
    } catch (err) {
      next(err);
    }
  },
  getResetPassword: async (req, res, next) => {
    try {
      const { email_token } = req.params;

      const data = await User.findOne({ where: { email_token } });

      if (!data) {
        return res.status(404).json({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      res.render("reset-password", { data: data });
    } catch (error) {
      next(error);
    }
  },
};
