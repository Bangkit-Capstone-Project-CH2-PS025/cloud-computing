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

    const deleted = await Travel_Tips.destroy({ where: { id } });

    return res.status(200).json({
      status: true,
      message: "Travel Tips has been deleted",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
};
