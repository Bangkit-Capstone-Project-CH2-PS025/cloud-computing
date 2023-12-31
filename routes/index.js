const express = require("express");
const router = express.Router();
const mid = require("../middlewares/restrict");
const auth = require("./auth");
const levelTraveler = require("./levelTraveler");
const visitedPlace = require("./visitedPlace");
const recomendation = require("./reccomendation");
const travelTips = require("./travelTips");
const account = require("./account");
const travelBudgets = require("./travelBudgets");
const itineraryPlans = require("./itinerary_plans");
const findTrip = require("./findTrip");
const { multerUpload } = require("../middlewares/cloudStorage");

router.use("/auth", auth);
router.use("/level-traveler", levelTraveler);
router.use("/visited-place", mid.mustLogin, visitedPlace);
// router.use("/itinerary", recomendation);
router.use("/travel-tips", travelTips);
router.use("/account", mid.mustLogin, multerUpload.single("images"), account);
router.use("/itinerary", mid.mustLogin, recomendation);
router.use("/detail-itinerary", mid.mustLogin, itineraryPlans);
// router.use("/travel-tips", multerUpload.single("image"), travelTips);
router.use("/travel-budgets", mid.mustLogin, travelBudgets);
router.use("/find-trip", mid.mustLogin, findTrip);

module.exports = router;
