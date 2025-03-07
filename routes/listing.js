const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../Models/listing.js");
const {isLoggedIn, isOwner,validateListing}=require("../middleware.js");
const listingController=require("../contollers/listings.js");
const multer  = require('multer');
const{storage}=require("../cloudConfig.js");
const upload = multer({ storage });


router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
);


//New route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing))
.delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
);


//Edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);

module.exports=router;




// //Index route
// router.get("/",wrapAsync(listingController.index));


// //Show Route
// router.get("/:id",wrapAsync(listingController.showListing));
// //Create Route
// router.post(
//     "/",
//     isLoggedIn,
//     validateListing,
//     wrapAsync(listingController.createListing));


//update route
// router.put(
//     "/:id",
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingController.updateListing));

//Delete Route
// router.delete(
//     "/:id",
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.destroyListing)
// );

