const express = require("express");
const router = express.Router();
const cauth = require("../controllers/auth");

router.post("/register", cauth.register);
router.post("/login", cauth.login);
router.put("/verify-account", cauth.activation);

module.exports = router;
