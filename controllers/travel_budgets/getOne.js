const { Travel_Budgets } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findTravelBudgets = await Travel_Budgets.findOne({
      where: { id },
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
      data: {
        id: findTravelBudgets.id,
        user_id: findTravelBudgets.user_id,
        budget_name: findTravelBudgets.budget_name,
        target: findTravelBudgets.target,
        flight: findTravelBudgets.flight,
        attractions: findTravelBudgets.attractions,
        stay: findTravelBudgets.stay,
        shopping: findTravelBudgets.shopping,
        food: findTravelBudgets.food,
        others: findTravelBudgets.others,
        total: total,
      },
    });
  } catch (error) {
    next(error);
  }
};
