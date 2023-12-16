const { Itinerary_Plans, Detail_Plans } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const findPlans = await Itinerary_Plans.findAll({
      include: [{ model: Detail_Plans, as: "detail_plans" }],
      where: { user_id: req.user.id },
    });

    if (!findPlans) {
      return res.status(404).json({
        status: false,
        message: "detail plan not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get all data detail plans",
      data: findPlans,
    });
  } catch (error) {
    next(error);
  }
};
