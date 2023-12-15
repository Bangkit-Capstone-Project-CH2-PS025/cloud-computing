const { Visited_Places, sequelize } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const data = await Visited_Places.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("country")), "country"],
        [sequelize.fn("COUNT", sequelize.col("country")), "count"],
      ],
      where: {
        user_id: req.user.id,
      },
      group: ["country"],
      raw: true,
    });

    const countData = data.length;

    if (!data || data.length === 0) {
      return res.status(404).json({
        status: false,
        message: "data not found!",
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfully counted data visited places grouped by country",
      data: { country: data, count: countData },
    });
  } catch (error) {
    next(error);
  }
};
