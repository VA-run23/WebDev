const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utlis/wrapAsync.js");
const ListingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage}= require("../cloudConfig.js");
const upload = multer(storage);


const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");


router.route("/")
    .get(wrapAsync(ListingController.index))//Index route
    .post(isLoggedIn, validateListing,upload.single('listing[image]'), wrapAsync(ListingController.createListing));//CREATE LISTING//listing[image] is a fieldname

//new route  ////if this new route is below the show route(router.get("/:id", wrapAsync(async (req, res) ) server searches for the id named new and shows the error 
router.get("/new", isLoggedIn, ListingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(ListingController.showListing))//LISTING(show)-ROUTE
    .put(isLoggedIn, isOwner, upload.single('listing[image]'),validateListing, wrapAsync(ListingController.updateListing))//update listing after edit
    .delete(isLoggedIn, isOwner, wrapAsync(ListingController.destroyListing))//delete

//EDIT LISTING
router.get("/:id/edit", isLoggedIn, isOwner, validateListing, wrapAsync(ListingController.renderEditForm));

module.exports = router;