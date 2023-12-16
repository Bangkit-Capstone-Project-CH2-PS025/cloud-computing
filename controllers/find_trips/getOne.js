const { Find_Trip } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findTrips = await Find_Trip.findOne({
      where: { id },
    });

    if (!findTrips) {
      return res.status(404).json({
        status: false,
        message: "find trip not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get data find trips",
      data: findTrips,
    });
  } catch (error) {
    next(error);
  }
};
