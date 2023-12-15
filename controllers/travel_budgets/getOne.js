const { Travel_Budgets } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const findTravelBudgets = await Travel_Budgets.findAll({
      where: { user_id: req.user.id },
    });

    if (!findTravelBudgets) {
      return res.status(404).json({
        status: false,
        message: "Travel Budget not found",
      });
    }

    const total =
      findTravelBudgets.flight +
      findTravelBudgets.attractions +
      findTravelBudgets.stay +
      findTravelBudgets.shopping +
      findTravelBudgets.food +
      findTravelBudgets.others;

    return res.status(200).json({
      status: true,
      message: "successfuly get all data travel budget",
      data: { findTravelBudgets, total },
    });
  } catch (error) {
    next(error);
  }
};
