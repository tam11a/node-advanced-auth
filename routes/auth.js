const express = require("express");
const {
  register,
  login,
  forgetpassword,
  resetpassword,
  validate,
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");
const router = express.Router();

// Register API
/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    tags: [Authentication]
 *    summary: Register User Account
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - userName
 *              - fullName
 *              - email
 *              - password
 *            properties:
 *              userName:
 *                type: string
 *              fullName:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              avatarUrl:
 *                type: string
 *
 *    responses:
 *      201:
 *        description: Account creation successful
 *      400:
 *        description: Bad Request
 *
 */
router.route("/register").post(register);

// Login API
/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    tags: [Authentication]
 *    summary: Login User Account
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *
 *    responses:
 *      200:
 *        description: Login successful
 *      400:
 *        description: Bad Request
 *      401:
 *        description: Invalid Credentials
 *
 */
router.route("/login").post(login);
// Validation API
/**
 * @swagger
 * /api/auth/validate:
 *  get:
 *    tags: [Authentication]
 *    summary: Validate User Account
 *    security:
 *      - bearer: []
 *    responses:
 *      200:
 *        description: Authorized
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: No User Found
 *
 */
router.route("/validate").get(protect, validate);
router.route("/forget-password").post(forgetpassword);
router.route("/resetpassword").post(resetpassword);

module.exports = router;
