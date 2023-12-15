const { Travel_Budgets } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;
    const {
      budget_name,
      target,
      flight,
      attractions,
      stay,
      shopping,
      food,
      others,
    } = req.body;

    const findData = await Travel_Budgets.findOne({
      where: { id },
    });

    if (!findData) {
      return res.status(404).json({
        status: false,
        message: "budget name not found",
      });
    }

    const updated = await Travel_Budgets.update(
      {
        user_id,
        budget_name,
        target,
        flight,
        attractions,
        stay,
        shopping,
        food,
        others,
      },
      { where: { id } }
    );

    return res.status(200).json({
      status: true,
      message: "successfully updated a travel budget",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};
