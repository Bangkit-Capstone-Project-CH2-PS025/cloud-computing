const express = require("express");
const router = express.Router();
const cFindTrip = require("../controllers/find_trips");
const { multerUpload } = require("../middlewares/cloudStorage");

router.post("/create", multerUpload.single("image"), cFindTrip.create);
router.get("/get-all", cFindTrip.getAll);
router.get("/get-all-id", cFindTrip.getAllByUserId);
router.get("/get-one/:id", cFindTrip.getOne);
router.put("/update/:id", multerUpload.single("image"), cFindTrip.update);
router.delete("/delete/:id", cFindTrip.destroy);

module.exports = router;
