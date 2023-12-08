const express = require("express");
const router = express.Router();

const caccount = require("../controllers/account");

router.get("/getAccount", caccount.getOne);
router.put("/updateAccount", caccount.update);
router.put("/updatePassword", caccount.updatePass);

module.exports = router;
