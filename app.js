require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const yaml = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const apiDocumentation = yaml.load("./api-docs.yaml");
const fs = require("fs");
const tf = require("@tensorflow/tfjs");
// const routes = require("./routes");
const { hostname } = require("os");
const app = express();
const { PORT } = process.env;

// const https = require("https");

// const options = {
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem"),
//   requestCert: false,
//   rejectUnauthorized: false,
// };

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocumentation));
app.use(cors());
app.use(morgan("dev"));
// app.use(routes);

app.get("/", (req, res) => {
  return res.send("Welcome to -- ITINERGO API");
});

app.post("/predict", async (req, res, next) => {
  try {
    // Load tf model

    // const modelPath = "";
    const model = await tf.loadLayersModel(
      "C://MyProject/Projects/ItinergoAPI/utils/models/hello.h5"
    );

    // get input data from the request
    const { inputX } = req.body;

    // Make predictions using the loaded model
    const predictions = model.predictions(tf.tensor(inputX));

    // convert predictions to json format and send the response
    res.json({ predictions: predictions.arraySync() });
  } catch (error) {
    next(error);
  }
});

// handle route statis
app.use("/public", express.static(path.join(__dirname, "public")));

// Error handling 400
app.use((_req, res) => {
  return res.status(404).json({
    status: false,
    message: "are you lost?",
  });
});

// Eror handling 500
app.use((err, _req, res) => {
  return res.status(500).json({
    status: false,
    message: "internal server error " + err.message,
    data: null,
  });
});

app.listen(PORT, () => {
  return console.log(`running on http://localhost:${PORT}`);
});

// const server = https.createServer(options, app);
// server.listen(PORT, () => {
//   return console.log(`running on https://localhost:${PORT}`);
// });
