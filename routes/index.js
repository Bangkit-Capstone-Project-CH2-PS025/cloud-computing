const express = require("express");
const router = express.Router();
const mid = require("../middlewares/restrict");
const auth = require("./auth");
const levelTraveler = require("./levelTraveler");
const visitedPlace = require("./visitedPlace");
const recomendation = require("./reccomendation");
const travelTips = require("./travelTips");
const travelBudgets = require("./travelBudgets");
const { multerUpload } = require("../middlewares/cloudStorage");

router.use("/auth", auth);
router.use("/level-traveler", levelTraveler);
router.use("/visited-place", mid.mustLogin, visitedPlace);
router.use("/itinerary", mid.mustLogin, recomendation);
router.use("/travel-tips", multerUpload.single("image"), travelTips);
router.use("/travel-budgets", travelBudgets);

module.exports = router;
