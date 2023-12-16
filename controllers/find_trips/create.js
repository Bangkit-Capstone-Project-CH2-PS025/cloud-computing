const { Find_Trip, User } = require("../../models");
const { LEVEL_TRAVELLER } = require("../../handlers/enum");
const { uploadToStorage } = require("../../middlewares/cloudStorage");

module.exports = async (req, res, next) => {
  try {
    const { city, country, departure, until, persons, contact } = req.body;

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

    const created = await Find_Trip.create({
      user_id: findUser.id,
      city,
      country,
      departure,
      until,
      persons,
      contact,
      is_available: true,
      image: imageUrl,
    });

    const addXp = Number(findUser.xp) + 50;

    let addLevelTravel;

    if (addXp <= 500) {
      addLevelTravel = LEVEL_TRAVELLER.NEWBIE;
    }
    if (addXp > 600 && addXp <= 1000) {
      addLevelTravel = LEVEL_TRAVELLER.SEASONAL;
    }
    if (addXp > 1000 && addXp <= 2000) {
      addLevelTravel = LEVEL_TRAVELLER.TRAVELLER;
    }
    if (addXp > 2000 && addXp <= 3000) {
      addLevelTravel = LEVEL_TRAVELLER.EXPLORER;
    }

    if (addXp > 3000) {
      addLevelTravel = LEVEL_TRAVELLER.EXPLORER;
    }

    const updateXp = await User.update(
      {
        xp: addXp,
        level_id: addLevelTravel,
      },
      { where: { id: findUser.id } }
    );

    return res.status(201).json({
      status: true,
      message: "successfully create a new visited place and you got 50 XP!",
      data: created,
    });
  } catch (error) {
    next(error);
  }
};
