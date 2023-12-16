const { Itinerary_Plans, Detail_Plans } = require("../../models");
const apiAdapter = require("../../handlers/apiAdapter");
const { ML_URL } = process.env;

const api = apiAdapter(ML_URL);

module.exports = async (req, res, next) => {
  try {
    const media = await api.post("/recommend/place_name", req.body);

    if (!media) {
      return res.status(404).json({
        status: false,
        message: "data not found",
      });
    }

    const createItinerary = await Itinerary_Plans.create({
      user_id: req.user.id,
      city: req.body.city,
      budget: req.body.budget,
      duration: req.body.duration,
      preference_1: req.body.user_preferences_1,
      preference_2: req.body.user_preferences_2,
      is_finished: false,
    });

    const maxDestinations = 30;
    const dataLength = Math.min(media.data.length, maxDestinations);

    const destinations = {};

    for (let i = 0; i < dataLength; i++) {
      const destinationColumnName = `dest${i + 1}`;
      destinations[destinationColumnName] = media.data[i].place_name;
    }

    destinations.itinerary_plan_id = createItinerary.id;

    await Detail_Plans.create(destinations);

    return res.status(200).json({
      status: true,
      message: "success",
      data: media.data,
    });
  } catch (error) {
    next(error);
  }
};
