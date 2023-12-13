const express = require("express");
const router = express.Router();
const cauth = require("../controllers/auth");
const timeout = require("connect-timeout");

router.post("/register", timeout("20s"), cauth.register);
router.post("/login", timeout("20s"), cauth.login);
router.post("/forgot-password", timeout("20s"), cauth.resetpw);
router.get("/verify-account", timeout("20s"), cauth.activation);
router.post(
  "/reset-password/:email_token",
  timeout("20s"),
  cauth.createNewPassword.resetPassword
);
router.get(
  "/reset-password/:email_token",
  timeout("20s"),
  cauth.createNewPassword.getResetPassword
);

module.exports = router;
