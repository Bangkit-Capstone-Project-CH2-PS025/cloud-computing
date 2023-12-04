const { Visited_Place } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { country, city, month, year } = req.body;
    const findData = await Visited_Place.findOne({ where: { id } });

    if (!findData) {
      return res.status(404).json({
        status: false,
        message: "data not found",
        data: null,
      });
    }

    const deleted = await Visited_Place.update(
      {
        country,
        city,
        month,
        year,
      },
      { where: { id } }
    );

    return res.status(200).json({
      status: true,
      message: "successfully delete a visited place",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
};
