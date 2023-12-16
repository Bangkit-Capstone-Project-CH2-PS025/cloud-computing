const { Itinerary_Plans, Detail_Plans, User } = require("../../models");
const apiAdapter = require("../../handlers/apiAdapter");
const { ML_URL } = process.env;
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const api = apiAdapter(ML_URL);

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split("Bearer ")[1];
    const verify = jwt.verify(token, JWT_SECRET);
    const media = await api.post("/recommend/place_name", req.body);

    if (!media) {
      return res.status(404).json({
        status: false,
        message: "data not found",
      });
    }

    const findUser = await User.findOne({ where: { id: verify.id } });

    if (!findUser) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }

    const createItinerary = await Itinerary_Plans.create({
      user_id: findUser.id,
      city: req.body.city,
      budget: req.body.budget,
      duration: req.body.duration,
      preference_1: req.body.user_preferences_1,
      preference_2: req.body.user_preferences_2,
      is_finished: false,
    });

    const destinations = {};
    let destinationIndex = 1;

    for (let i = 0; i < media.data.length; i++) {
      const currentArray = media.data[i];

      for (let j = 0; j < currentArray.length; j++) {
        const destinationColumnName = `dest${destinationIndex++}`;
        destinations[destinationColumnName] = currentArray[j].place_name;
      }
    }

    dataObj = {};

    for (let i = 0; i < media.data.length; i++) {
      const currentArray = media.data[i];
      const day = `day-${i + 1}`;

      dataObj[day] = currentArray.map((destination) => {
        return {
          id: destination.id,
          place_name: destination.place_name,
        };
      });
    }

    destinations.itinerary_plan_id = createItinerary.id;

    await Detail_Plans.create(destinations);

    return res.status(200).json({
      status: true,
      message: "success",
      data: dataObj,
    });
  } catch (error) {
    next(error);
  }
};
