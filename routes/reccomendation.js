const express = require("express");
const router = express.Router();
const cRecomend = require("../controllers/recomendation");

router.post("/predict", cRecomend.recomend);
router.get("/get-recomend", cRecomend.getRecomend);
router.get("/calc-carbon", cRecomend.calcCarbon);
// router.get("/get-one/:id", cVisitPlace.getOne);
// router.get("/count-by-city", cVisitPlace.countByCity);
// router.get("/count-by-country", cVisitPlace.countByCountry);
// router.put("/update/:id", cVisitPlace.update);
// router.delete("/delete/:id", cVisitPlace.destroy);

module.exports = router;
