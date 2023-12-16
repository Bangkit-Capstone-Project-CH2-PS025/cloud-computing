const { Level_Travelers } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const findName = await Level_Travelers.findAll();

    if (!findName) {
      return res.status(404).json({
        status: false,
        message: "level traveler not found",
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get all data level traveler",
      data: findName,
    });
  } catch (error) {
    next(error);
  }
};
