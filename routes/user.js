const express=require("express");
const router=express.Router();
const User=require("../Models/user.js");
const wrapAsync = require("../utils/wrapAsync");
// const { route } = require("./listing");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../contollers/user.js");

router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup)
);

router
.route("/login")
.get(userController.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local", { 
    failureRedirect: '/login',
     failureFlash:true,  // failureFlash means if user fail to aunthenticate gives a flash message
    }),
    userController.login
  );

router.get("/logout",userController.logout);

module.exports=router;
// router.get("/signup",userController.renderSignupForm);
// router.post("/signup",wrapAsync(userController.signup)
// );

// router.get("/login",userController.renderLoginForm);
// router.post(
//     "/login", 
//     saveRedirectUrl,
//     passport.authenticate("local", { 
//     failureRedirect: '/login',
//      failureFlash:true,  // failureFlash means if user fail to aunthenticate gives a flash message
//     }),
//     userController.login
//   );
