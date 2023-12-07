const express = require("express");
const router = express.Router();
const ctravelTips = require("../controllers/travel_tips");

router.post("/create", ctravelTips.create);
router.get("/get-all", ctravelTips.getAll);
router.get("/get-one/:id", ctravelTips.getOne);
router.put("/update/:id", ctravelTips.update);
router.delete("/delete/:id", ctravelTips.destroy);

module.exports = router;
