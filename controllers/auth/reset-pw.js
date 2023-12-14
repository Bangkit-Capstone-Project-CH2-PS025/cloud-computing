const { User } = require("../../models");
const { sendEmail } = require("../../utils/email/email.js");
const { IP_ADDRESS, PORT } = process.env;
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const resetPassword = async ({ link, name }) => {
  const templatePath = path.join(
    __dirname,
    "..",
    "..",
    "views",
    "resetAccountEmail.ejs"
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
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "data not found",
      });
    }

    if (user) {
      const templateEmail = {
        to: email.toLowerCase(),
        subject: "Reset Your Password!",
        html: await resetPassword({
          link: `http://${IP_ADDRESS}:${PORT}/auth/verify-account?token=${token}`,
          name: created.name,
        }),
      };

      await sendEmail(templateEmail);
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
