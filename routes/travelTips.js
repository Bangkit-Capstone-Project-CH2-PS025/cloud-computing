const express = require("express");
const router = express.Router();
const ctravelTips = require("../controllers/travel_tips");
const mid = require("../middlewares/restrict");
const { multerUpload } = require("../middlewares/cloudStorage");

router.post(
  "/create",
  multerUpload.fields([
    { name: "image_cover", maxCount: 1 },
    { name: "image_1", maxCount: 1 },
    { name: "image_2", maxCount: 1 },
    { name: "image_3", maxCount: 1 },
    { name: "image_4", maxCount: 1 },
    { name: "image_5", maxCount: 1 },
  ]),
  mid.mustAdmin,
  ctravelTips.create
);
router.get("/get-all", mid.mustLogin, ctravelTips.getAll);
router.get("/get-one/:id", mid.mustLogin, ctravelTips.getOne);
router.put("/update/:id", mid.mustAdmin, ctravelTips.update);
router.delete("/delete/:id", mid.mustAdmin, ctravelTips.destroy);
router.get("/most-views", mid.mustLogin, ctravelTips.mostViews);

module.exports = router;
