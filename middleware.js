const Listing=require("./Models/listing");
const Review = require("./Models/review");
const ExpressError=require("./utils/ExpreesError.js");
const {listingSchema,reviewSchema}=require("./schema.js");

module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.path,"..",req.originalUrl);
    if(!req.isAuthenticated()){
        //redirect Url save
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must looged in !!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
            req.flash("error","Permision Denied!!");
           return  res.redirect(`/listings/${id}`);
        }

    next();
};


module.exports. validateListing=(req,res,next)=>{
    let {error}= listingSchema.validate(req.body);

    if(error){
        //el=indiviual element
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};


module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        // Collect error messages from Joi validation
        let errMsg = error.details.map((el) => el.message).join(", ");

        // Use ExpressError (assuming it's a custom error class)
        throw new expressError(400, errMsg);

    } else {
        next(); // Proceed to the next middleware if no error
    }
};

module.exports.isReviewAuthor=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
            req.flash("error","Permision Denied!! for deleting the reviews ");
           return  res.redirect(`/listings/${id}`);
        }

    next();
};