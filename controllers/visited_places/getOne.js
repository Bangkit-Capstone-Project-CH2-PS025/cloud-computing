const { Visited_Places } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findData = await Visited_Places.findOne({
      where: { id },
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
      message: "successfuly get data visited place",
      data: findData,
    });
  } catch (error) {
    next(error);
  }
};
