const express = require("express");
const router = express.Router();
const cauth = require("../controllers/auth");

router.post("/register", cauth.register);

module.exports = router;
