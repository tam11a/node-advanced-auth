const express = require("express");
const {
  register,
  login,
  forgetpassword,
  resetpassword,
} = require("../controllers/auth");
const router = express.Router();


// Register API
router.route("/register").post(register);
/**
 * @swagger
 * 
 * /api/auth/register:
 *  post:
 *     summary: Register an User.
 *     description: Register a new User Credential in DB.
 *     responses:
 *       201:
 *         description: OTP Sent & Stored Credential to the DB. Need Verification Now.
 *        
 */

router.route("/login").post(login);
router.route("/forgetpassword").post(forgetpassword);
router.route("/resetpassword").post(resetpassword);

module.exports = router;
