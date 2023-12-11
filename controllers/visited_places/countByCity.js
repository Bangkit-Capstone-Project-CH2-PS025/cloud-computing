const { Visited_Place, sequelize } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const data = await Visited_Place.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("city")), "city"],
        [sequelize.fn("COUNT", sequelize.col("city")), "count"],
      ],
      where: {
        user_id: req.user.id,
      },
      group: ["city"],
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
      message: "successfully counted data visited places grouped by city",
      data: {
        city: data,
        count: countData,
      },
    });
  } catch (error) {
    next(error);
  }
};
