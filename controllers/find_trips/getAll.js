const { Find_Trip } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const findTrips = await Find_Trip.findAll();

    if (!findTrips) {
      return res.status(404).json({
        status: false,
        message: "find trip not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get all data find trips",
      data: findTrips,
    });
  } catch (error) {
    next(error);
  }
};
