const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utlis/wrapAsync.js");
const passport = require("passport");
// const ExpressError = require("../utlis/ExpressError.js");
const { saveRedirectUrl } = require("../middleware.js"); //This implies that saveRedirectUrl is a property of the exported object
//const saveRedirectUrl= require("../middleware.js") This line of code assigns the entire exported object

const userController = require("../controllers/users.js");

router.route("signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signUp));

router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login);

router.get("/logout", userController.logout);

module.exports = router;