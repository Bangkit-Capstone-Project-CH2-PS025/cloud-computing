const apiAdapter = require("../../handlers/apiAdapter");
const { ML_URL } = process.env;

const api = apiAdapter(ML_URL);

module.exports = async (req, res, next) => {
  try {
    const media = await api.get("/generate/place");

    if (!media) {
      return res.status(404).json({
        status: false,
        message: "data not found",
      });
    }
    // https://storage.googleapis.com/itinergo-storage/images/discover_place/image_1.jpg

    const url = "https://storage.googleapis.com/itinergo-storage/";

    return res.status(200).json({
      status: true,
      message: "success",
      data: {
        id: media.data[0].id,
        place_name: media.data[0].place_name,
        city: media.data[0].city,
        dir: `${url}${media.data[0].dir}.jpg`,
      },
    });
  } catch (error) {
    next(error);
  }
};
