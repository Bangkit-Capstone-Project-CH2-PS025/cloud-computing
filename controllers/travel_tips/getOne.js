const { Travel_Tips } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const findTravelTips = await Travel_Tips.findOne({ where: { id } });

    if (!findTravelTips) {
      return res.status(404).json({
        status: false,
        message: "Travel Tips not found",
      });
    }

    await Travel_Tips.increment("total_views", { where: { id } });

    return res.status(200).json({
      status: true,
      message: "successfuly get data Travel Tips",
      data: findTravelTips,
    });
  } catch (error) {
    next(error);
  }
};
