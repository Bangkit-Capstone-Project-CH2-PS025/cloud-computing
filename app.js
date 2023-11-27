require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const yaml = require("yamljs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const swaggerUI = require("swagger-ui-express");
const apiDocumentation = yaml.load("./api-docs.yaml");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocumentation));
app.use(cors());
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(routes);

app.get("/", (req, res) => {
  return res.send("Welcome to -- ITINERGO API");
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

module.exports = app;
