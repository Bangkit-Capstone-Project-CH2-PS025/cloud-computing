const express = require("express");
const router = express.Router();
const cauth = require("../controllers/auth");

router.post("/register", cauth.register);
router.post("/login", cauth.login);
router.post("/forgot-password", cauth.resetpw);
router.get("/verify-account", cauth.activation);
router.post(
  "/reset-password/:email_token",
  cauth.createNewPassword.resetPassword
);
router.get(
  "/reset-password/:email_token",
  cauth.createNewPassword.getResetPassword
);

module.exports = router;
