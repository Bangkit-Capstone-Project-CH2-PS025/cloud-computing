const { Find_Trip } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findName = await Find_Trip.findOne({ where: { id } });

    if (!findName) {
      return res.status(404).json({
        status: false,
        message: "find trip not found",
        data: null,
      });
    }

    const deleted = await Find_Trip.destroy({ where: { id } });

    return res.status(200).json({
      status: true,
      message: "successfuly deleted data find trip",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
};
