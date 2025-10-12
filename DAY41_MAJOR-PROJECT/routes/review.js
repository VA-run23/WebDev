const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utlis/wrapAsync.js");


const { validateReview , isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController= require("..//controllers/reviews.js");

//reviews  //common_part listings/:id/reviews
////POST-REVIEW
router.post("/", validateReview,isLoggedIn, wrapAsync(reviewController.createReview));

////DELETE-ROUTE
router.delete("/:reviewId",isReviewAuthor,wrapAsync( reviewController.destroyReview))


module.exports = router;