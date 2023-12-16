const { Itinerary_Plans, Detail_Plans } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findPlans = await Itinerary_Plans.findOne({
      include: [{ model: Detail_Plans, as: "detail_plans" }],
      where: { id },
    });

    if (!findPlans) {
      return res.status(404).json({
        status: false,
        message: "detail plan not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get data detail plans",
      data: findPlans,
    });
  } catch (error) {
    next(error);
  }
};
