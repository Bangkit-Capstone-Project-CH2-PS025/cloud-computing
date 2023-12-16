const express = require("express");
const router = express.Router();
const cItineraryPlans = require("../controllers/itinerary_plans");
const { multerUpload } = require("../middlewares/cloudStorage");

// router.post("/create", multerUpload.single("image"), cVisitPlace.create);
router.get("/get-all", cItineraryPlans.getAll);
router.get("/get-one/:id", cItineraryPlans.getOne);
// router.get("/count-by-city", cVisitPlace.countByCity);
// router.get("/count-by-country", cVisitPlace.countByCountry);
router.put("/update/:id", cItineraryPlans.update);
// router.delete("/delete/:id", cVisitPlace.destroy);

module.exports = router;
