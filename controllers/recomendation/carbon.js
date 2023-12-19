const apiAdapter = require("../../handlers/apiAdapter");
const { ML_URL } = process.env;

const api = apiAdapter(ML_URL);

module.exports = async (req, res, next) => {
  try {
    const media = await api.get("/predict/carbon");

    console.log(media);

    if (!media) {
      return res.status(404).json({
        status: false,
        message: "data not found",
      });
    }

    result = JSON.parse(media.data);

    // Periksa apakah ada properti pada objek
    const cityKey = Object.keys(result)[0];
    if (!cityKey) {
      return res.status(404).json({
        status: false,
        message: "city data not found",
      });
    }

    // Ambil data dari objek
    const finalResult = result[cityKey];

    return res.status(200).json({
      status: true,
      message: "success",
      data: finalResult,
    });
  } catch (error) {
    next(error);
  }
};
