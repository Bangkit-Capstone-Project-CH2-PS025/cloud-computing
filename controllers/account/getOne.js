const { User, Level_Travelers } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const findAccount = await User.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
      include: {
        model: Level_Travelers,
        as: "level_traveler",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });

    if (!findAccount) {
      return res.status(404).json({
        status: false,
        message: "Account not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get data Account",
      data: findAccount,
    });
  } catch (error) {
    next(error);
  }
};
