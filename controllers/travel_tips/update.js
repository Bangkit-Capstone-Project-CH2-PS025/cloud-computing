const { Travel_Tips } = require("../../models");
const { uploadToStorage } = require("../../middlewares/cloudStorage");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const findTravelTips = await Travel_Tips.findOne({ where: { id } });

    if (!findTravelTips) {
      return res.status(404).json({
        status: false,
        message: "Travel Tips not found",
      });
    }

    const token = req.headers.authorization.split("Bearer ")[1];

    const verify = jwt.verify(token, JWT_SECRET);

    const { author, title, contents } = req.body;
    const image = req.file;

    const folder = verify.role;
    const name = verify.username;

    const imageUrl = await uploadToStorage(image, folder, name);

    const travelTips = await Travel_Tips.update(
      {
        author,
        title,
        contents,
        image: imageUrl,
      },
      { where: { id } }
    );

    return res.status(200).json({
      status: true,
      message: "Travel Tips has been updated",
      data: travelTips,
    });
  } catch (error) {
    next(error);
  }
};
