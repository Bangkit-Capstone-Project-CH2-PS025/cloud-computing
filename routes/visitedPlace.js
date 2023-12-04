const express = require("express");
const router = express.Router();
const cVisitPlace = require("../controllers/visited_place");

router.post("/create", cVisitPlace.create);
router.get("/get-all", cVisitPlace.getAll);
router.get("/get-one/:id", cVisitPlace.getOne);
router.get("/count-by-city", cVisitPlace.countByCity);
router.get("/count-by-country", cVisitPlace.countByCountry);
router.put("/update/:id", cVisitPlace.update);
router.delete("/delete/:id", cVisitPlace.destroy);

module.exports = router;
