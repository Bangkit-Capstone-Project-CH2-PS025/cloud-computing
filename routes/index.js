const express = require("express");
const router = express.Router();
const mid = require("../middlewares/restrict");
const auth = require("./auth");
const levelTraveler = require("./levelTraveler");
const visitedPlace = require("./visitedPlace");
const travelTips = require("./travelTips");
const { multerUpload } = require("../middlewares/cloudStorage");

router.use("/auth", auth);
router.use("/level-traveler", levelTraveler);
router.use("/visited-place", mid.mustLogin, visitedPlace);
router.use(
  "/travel-tips",
  mid.mustLogin,
  mid.mustAdmin,
  multerUpload.single("image"),
  travelTips
);

module.exports = router;
