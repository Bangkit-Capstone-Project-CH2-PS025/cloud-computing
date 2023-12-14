const { Visited_Places, User } = require("../../models");
const { LEVEL_TRAVELLER } = require("../../handlers/enum");

module.exports = async (req, res, next) => {
  try {
    const { country, city, month, year } = req.body;

    const findUser = await User.findOne({ where: { id: req.user.id } });

    if (!findUser) {
      return res.status(404).json({
        status: false,
        message: "user not found",
        data: null,
      });
    }

    const created = await Visited_Places.create({
      user_id: findUser.id,
      country,
      city,
      month,
      year,
    });

    const addXp = Number(findUser.xp) + 100;

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
      message: "successfully create a new visited place and you got 100 XP!",
      data: created,
    });
  } catch (error) {
    next(error);
  }
};
