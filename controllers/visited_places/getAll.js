const { Visited_Places } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const findData = await Visited_Places.findAll({
      where: { user_id: req.user.id },
    });

    if (!findData) {
      return res.status(404).json({
        status: false,
        message: "visited place not found",
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: "successfuly get all data visited place",
      data: findData,
    });
  } catch (error) {
    next(error);
  }
};
