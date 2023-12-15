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

    if (findData) {
      return res.status(404).json({
        status: false,
        message: "budget name not found",
      });
    }

    const deleted = await Travel_Budgets.destroy({ where: user_id });

    return res.status(200).json({
      status: true,
      message: "successfully deleted a travel budget",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
};
