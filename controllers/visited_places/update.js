const { Visited_Places } = require("../../models");
const { uploadToStorage } = require("../../middlewares/cloudStorage");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { country, city, month, year } = req.body;
    const image = req.file;

    const folder = req.user.role;
    const name = req.user.username;

    const findData = await Visited_Places.findOne({ where: { id } });

    if (!findData) {
      return res.status(404).json({
        status: false,
        message: "data not found",
        data: null,
      });
    }

    const imageUrl = await uploadToStorage(image, folder, name);

    const deleted = await Visited_Places.update(
      {
        country,
        city,
        month,
        year,
        image: imageUrl,
      },
      { where: { id } }
    );

    return res.status(200).json({
      status: true,
      message: "successfully delete a visited place",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
};
