const apiAdapter = require("../../handlers/apiAdapter");
const { ML_URL } = process.env;

const api = apiAdapter(ML_URL);

module.exports = async (req, res, next) => {
  try {
    const media = await api.post("/generate/preferences", req.body);

    if (!media) {
      return res.status(404).json({
        status: false,
        message: "data not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "success",
      data: media.data,
    });
  } catch (error) {
    next(error);
  }
};
