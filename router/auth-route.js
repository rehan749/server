
const express = require('express');
const router = express.Router();
// const { home, register } = require('../controllers/auth-control');
const authcontrollers = require('../controllers/auth-control');

// router.get("/", (req, res) => {
//     res.status(200).send("router js page!!");
// });


// router.route("/").get((req, res) => {
//     res
//     .status(200)
//     .send("router js page!!");
// });
router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);

router.route("/login").post(authcontrollers.login);


module.exports = router;
