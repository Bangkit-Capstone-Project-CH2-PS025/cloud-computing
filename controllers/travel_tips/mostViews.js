const { Travel_Tips } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const findTravelTips = await Travel_Tips.findAll({
      order: [["total_views", "DESC"]],
    });

    if (!findTravelTips) {
      return res.status(404).json({
        status: false,
        message: "Travel Tips not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get all data Travel Tips",
      data: findTravelTips,
    });
  } catch (error) {
    next(error);
  }
};
