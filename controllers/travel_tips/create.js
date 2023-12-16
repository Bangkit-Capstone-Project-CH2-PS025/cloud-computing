const { Travel_Tips } = require("../../models");
const { uploadToStorage } = require("../../middlewares/cloudStorage");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const { title, contents } = req.body;
    const image_cover = req.files["image_cover"];
    const image_1 = req.files["image_1"];
    const image_2 = req.files["image_2"];
    const image_3 = req.files["image_3"];
    const image_4 = req.files["image_4"];
    const image_5 = req.files["image_5"];

    const folder = req.user.role;
    const name = req.user.username;
    console.log("name", req.user.username);

    const imageCoverUrl = await uploadToStorage(image_cover[0], folder, name);
    const image1Url = await uploadToStorage(image_1[0], folder, name);
    const image2Url = await uploadToStorage(image_2[0], folder, name);
    const image3Url = await uploadToStorage(image_3[0], folder, name);
    const image4Url = await uploadToStorage(image_4[0], folder, name);
    const image5Url = await uploadToStorage(image_5[0], folder, name);

    const travelTips = await Travel_Tips.create({
      user_id: req.user.id,
      author: req.user.name,
      title,
      contents,
      image_cover: imageCoverUrl,
      image_1: image1Url,
      image_2: image2Url,
      image_3: image3Url,
      image_4: image4Url,
      image_5: image5Url,
      total_views: 0,
    });

    return res.status(201).json({
      status: true,
      message: "Travel Tips has been created",
      data: travelTips,
    });
  } catch (error) {
    next(error);
  }
};
