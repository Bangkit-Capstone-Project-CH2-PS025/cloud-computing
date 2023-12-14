const { Level_Travelers } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { name, badge = NULL } = req.body;

    const findName = await Level_Travelers.findOne({ where: { name } });

    if (findName) {
      return res.status(409).json({
        status: false,
        message: "name already exist",
      });
    }

    const created = await Level_Travelers.create({
      name,
      badge,
    });

    return res.status(201).json({
      status: true,
      message: "successfuly create a new level traveler",
      data: created,
    });
  } catch (error) {
    next(error);
  }
};
