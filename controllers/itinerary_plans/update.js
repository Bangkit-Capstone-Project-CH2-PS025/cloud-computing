const { Itinerary_Plans, User } = require("../../models");
const { LEVEL_TRAVELLER } = require("../../handlers/enum");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findPlan = await Itinerary_Plans.findOne({ where: { id } });
    const findUser = await User.findOne({ where: { id: req.user.id } });

    if (!findPlan) {
      return res.status(404).json({
        status: false,
        message: "plan not found",
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

    const updated = await Itinerary_Plans.update(
      {
        is_finished: true,
      },
      { where: { id } }
    );

    const addXp = Number(findUser.xp) + 150;

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
      message: "congrats you have been finished this trip and you got 150 XP!",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};
