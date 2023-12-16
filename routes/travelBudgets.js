const express = require("express");
const router = express.Router();
const cTravelBudget = require("../controllers/travel_budgets");

router.post("/create", cTravelBudget.create);
router.get("/get-all", cTravelBudget.getAll);
router.get("/get-one/:id", cTravelBudget.getOne);
router.put("/update/:id", cTravelBudget.update);
router.delete("/delete/:id", cTravelBudget.destroy);

module.exports = router;
