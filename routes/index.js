const express = require("express");
const router = express.Router();
const mid = require("../middlewares/restrict");
const auth = require("./auth");
const levelTraveler = require("./levelTraveler");
const visitedPlace = require("./visitedPlace");
const recomendation = require("./reccomendation");

router.use("/auth", auth);
router.use("/level-traveler", levelTraveler);
router.use("/visited-place", mid.mustLogin, visitedPlace);
router.use("/itinerary", recomendation);

module.exports = router;
