const Listing= require("./models/listing");
const Review= require("./models/review.js")
const ExpressError = require("./utlis/ExpressError");
const { listingSchema , reviewSchema} = require("./schema.js");


module.exports.isLoggedIn = (req, res, next) => {
    console.log(req);
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "Login to create listing");
        return res.redirect("/login")
    }
    next();
}


module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;//saving is session may delete the url so storingthe url in locals, the session cannot delete the url
    } else {
        next();
    }
}


// module.exports.isOwner = async (req, res, next) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//     if (!listing) {
//         req.flash("error", "Listing not found");
//         return res.redirect('/listings');//agar return nahi kiya tho next block wale functions bhi perform karne lagenge
//     }
//     if (!listing.owner || !listing.owner._id.equals(res.locals.currUser._id)) {
//         req.flash("error", "You don't have permission to make this change");
//         return res.redirect(`/listings/${id}`);
//     }
//     next();//next ko call kiye bina middleware does't work
// }

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect('/listings');
    }
    if (!listing.owner || !listing.owner._id.equals(req.user._id)) {
        req.flash("error", "You don't have permission to make this change");
        return res.redirect(`/listings/${id}`);
    }
    next();
}


module.exports.validateListing = (req, res, next) => {
    let error = listingSchema.validate(req.body);
    if (error && error.details) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if (error && error.details) {
        let errMsg = error.details.map((el) => el.message).join(",");
            ////Example for map()
        // const numbers = [1, 2, 3, 4];
        // const squares = numbers.map(x => x ** 2);
        // console.log(squares);// Output: [1, 4, 9, 16]
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

module.exports.isReviewAuthor= async (req, res, next)=>{
    let { id,reviewId } = req.params;
    let review= await Review.findById(reviewId);
    if(! review.author._id.equals(res.locals.currUser._id)){//learn this type of lining of codes
     req.flash("error", "You cannot delete other's reviews");
     return res.redirect(`/listings/${id}`);//agar return nahi kiya tho next block wale functions bhi perform karne lagenge
    }
    next();
}