const { Travel_Budgets } = require("../../models");

module.exports = async (req, res, next) => {
  try {
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
      where: { budget_name, user_id },
    });

    if (findData) {
      return res.status(409).json({
        status: false,
        message: "budget name already exist",
      });
    }

    const created = await Travel_Budgets.create({
      user_id,
      budget_name,
      target,
      flight,
      attractions,
      stay,
      shopping,
      food,
      others,
    });

    return res.status(201).json({
      status: true,
      message: "successfully created a travel budget",
      data: created,
    });
  } catch (error) {
    next(error);
  }
};
