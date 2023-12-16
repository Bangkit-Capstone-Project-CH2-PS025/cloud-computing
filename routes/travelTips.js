const express = require("express");
const router = express.Router();
const ctravelTips = require("../controllers/travel_tips");
const mid = require("../middlewares/restrict");

router.post("/create", mid.mustAdmin, ctravelTips.create);
router.get("/get-all", mid.mustLogin, ctravelTips.getAll);
router.get("/get-one/:id", mid.mustLogin, ctravelTips.getOne);
router.put("/update/:id", mid.mustAdmin, ctravelTips.update);
router.delete("/delete/:id", mid.mustAdmin, ctravelTips.destroy);
router.get("/most-views", mid.mustLogin, ctravelTips.mostViews);

module.exports = router;
