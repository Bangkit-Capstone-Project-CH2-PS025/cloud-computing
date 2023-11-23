const { User } = require("../../models");
const { sendEmail } = require("../../utils/email/email.js");
const resetPassword = require("../../utils/email/resetAccountEmail.js");

module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      const token = user.email_token;
      const templateResetPassword = {
        to: req.body.email.toLowerCase(),
        subject: "Reset Your Password!",
        html: resetPassword(
          `http://localhost:8000/auth/update-password?email_token=${token}`
        ),
      };
      await sendEmail(templateResetPassword);
    }

    return res.status(200).json({
      status: true,
      message: "request reset password successful",
      data: {
        email: user.email,
        email_token: user.email_token,
      },
    });
  } catch (error) {
    next(error);
  }
};
