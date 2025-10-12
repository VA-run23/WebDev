const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
// const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" }, }).populate("owner");//nested populate
    if (!listing) {
        req.flash("error", "Listing you requested for does not exits");
        res.redirect("/listing");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res, next) => {
    let response=await geocodingClient.forwardGeocode({
        query: 'req.body.listing.location',
        limit: 1
      })
      .send();



    let url= req.file.path;
    let filename= req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;//passport by default stores the current user in req.user && it represents owner
    newListing.image={url, filename};

    newListing.geometry= response.body.features[0].geometry;

    let savedListing= await newListing.save();
    console.log(savedListing);
    req.flash("success", "new listing created")
    res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {//after showing listing only you can edit, so no need to add isLoggedIn middleware here, but it is not the case as you can send request from other api
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exits");
        res.redirect("/listing");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload", "/uploads/h_200,w_300");
    res.render("listings/edit.ejs", { listing , originalImageUrl});
}

module.exports.updateListing = async (req, res) => {//Phele check hoga ki user logged in hai ya nahi phir check hoga ki woh user owner hai ya nahi
    let { id } = req.params;
    let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing })//Deconstructing parameters\
   
    if(typeof req.file !== "undefined"){
    let url= req.file.path;
    let filename= req.file.filename;
    listing.image={url, filename};
    await listing.save();
    }
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`)
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing is deleted")
    res.redirect("/listings");
}