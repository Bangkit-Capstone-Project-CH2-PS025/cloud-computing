const express = require("express");
const router = express.Router();
const cleveltravel = require("../controllers/level_travelers");

router.post("/create", cleveltravel.create);
router.get("/get-all", cleveltravel.getAll);
router.get("/get-one/:id", cleveltravel.getOne);
router.put("/update/:id", cleveltravel.update);
router.delete("/delete/:id", cleveltravel.destroy);

module.exports = router;
