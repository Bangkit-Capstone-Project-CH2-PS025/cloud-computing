const { Level_Travelers } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findName = await Level_Travelers.findOne({ where: { id } });

    if (!findName) {
      return res.status(404).json({
        status: false,
        message: "level traveler not found",
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get data level traveler",
      data: findName,
    });
  } catch (error) {
    next(error);
  }
};
