const express = require("express");
const router = express.Router();
const auth = require("./auth");
const levelTraveler = require("./levelTraveler");

router.use("/auth", auth);
router.use("/level-traveler", levelTraveler);

module.exports = router;
