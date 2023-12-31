const { Level_Travelers } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, badge } = req.body;
    const findName = await Level_Travelers.findOne({ where: { id } });

    if (!findName) {
      return res.status(404).json({
        status: false,
        message: "level traveler not found",
        data: null,
      });
    }

    const updated = await Level_Travelers.update(
      { name, badge },
      { where: { id } }
    );

    return res.status(200).json({
      status: true,
      message: "successfuly updated data level traveler",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};
