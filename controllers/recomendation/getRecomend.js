// const apiAdapter = require("../../handlers/apiAdapter");
// const { ML_URL } = process.env;

// const api = apiAdapter(ML_URL);

// module.exports = async (req, res, next) => {
//   try {
//     const media = await api.get("/recommend/all");

//     if (!media) {
//       return res.status(404).json({
//         status: false,
//         message: "data not found",
//       });
//     }

//     return res.status(200).json({
//       status: true,
//       message: "success",
//       data: media.data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const apiAdapter = require("../../handlers/apiAdapter");
const { ML_URL } = process.env;

const api = apiAdapter(ML_URL);

module.exports = async (req, res, next) => {
  try {
    const media = await api.get("/recommend/all");

    if (!media.data || media.data.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Data not found",
      });
    }

    const { place_name } = req.query;

    if (place_name) {
      const filteredData = media.data.filter((item) =>
        item.place_name.toLowerCase().includes(place_name.toLowerCase())
      );

      if (filteredData.length === 0) {
        return res.status(404).json({
          status: false,
          message: `Data not found for place_name: ${place_name}`,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Success",
        data: filteredData,
      });
    }

    return res.status(200).json({
      status: true,
      message: "Success",
      data: media.data,
    });
  } catch (error) {
    next(error);
  }
};
