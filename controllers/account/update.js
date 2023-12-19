const { User } = require("../../models");
const { uploadToStorage } = require("../../middlewares/cloudStorage");

module.exports = async (req, res, next) => {
  try {
    const findAccount = await User.findOne({
      where: { id: req.user.id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    if (!findAccount) {
      return res.status(404).json({
        status: false,
        message: "Account not found",
      });
    }

    const { email, name } = req.body;
    const images = req.file;

    const folder = req.user.role;
    const username = req.user.username;

    const findEmail = await User.findOne({ where: { email } });

    if (findEmail) {
      return res.status(409).json({
        status: false,
        message: "email already exist",
      });
    }

    if (images) {
      const imageUrl = await uploadToStorage(images, folder, username);

      await User.update(
        {
          email,
          name,
          images: imageUrl,
        },
        { where: { id: req.user.id } }
      );
    } else {
      await User.update(
        {
          email,
          name,
        },
        { where: { id: req.user.id } }
      );
    }

    return res.status(200).json({
      status: true,
      message: "Account has been updated",
    });
  } catch (error) {
    next(error);
  }
};
