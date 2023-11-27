require("dotenv").config();
const { User } = require("../../models");
const { VERIFIED } = require("../../handlers/enum.js");

module.exports = async (req, res, next) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({ where: { email_token: token } });

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const activateUser = await User.update(
      {
        is_verified: VERIFIED.TRUE,
      },
      {
        where: { email_token: token },
      }
    );

    res.render("activation.ejs");
  } catch (error) {
    next(error);
  }
};
