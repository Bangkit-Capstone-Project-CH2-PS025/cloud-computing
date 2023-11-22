const express = require("express");
const router = express.Router();
const auth = require("./auth");

router.use("/user", auth);

module.exports = router;
