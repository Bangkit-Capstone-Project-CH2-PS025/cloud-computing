const { Find_Trip, User } = require("../../models");
const { uploadToStorage } = require("../../middlewares/cloudStorage");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { city, country, departure, until, persons, contact, is_available } =
      req.body;

    const image = req.file;

    const folder = req.user.role;
    const name = req.user.username;

    const findData = await Find_Trip.findOne({
      where: { city, user_id: req.user.id },
    });

    const findUser = await User.findOne({ where: { id: req.user.id } });

    if (findData) {
      return res.status(409).json({
        status: false,
        message: "find trip already exist",
        data: null,
      });
    }

    if (!findUser) {
      return res.status(404).json({
        status: false,
        message: "user not found",
        data: null,
      });
    }

    const imageUrl = await uploadToStorage(image, folder, name);

    const created = await Find_Trip.update(
      {
        user_id: findUser.id,
        city,
        country,
        departure,
        until,
        persons,
        contact,
        is_available,
        image: imageUrl,
      },
      { where: { id } }
    );

    return res.status(200).json({
      status: true,
      message: "successfully updated a find trip",
      data: created,
    });
  } catch (error) {
    next(error);
  }
};
