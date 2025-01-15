const router = require("express").Router();
const { register, login } = require("../controller/authController");
const { validateRegister, validateLogin } = require("../middleware/validate");

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

module.exports = router;
