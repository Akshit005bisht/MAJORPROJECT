const Listing=require("../Models/listing");
const Review=require("../Models/review");

module.exports.createReview=async(req,res) =>{
    console.log(req.params.id);
let listing=  await Listing.findById(req.params.id);
let newReview=new Review(req.body.review);
newReview.author=req.user._id;

listing.reviews.push(newReview);

await newReview.save(); // to save newReview in Database
await listing.save();   // to make change in exsiting database
req.flash("success","New Review Created");
console.log("new review save");
res.redirect(`/listings/${listing._id}`);
};


module.exports.destroyReview=async(req,res)=>{
    let {id,reviewId}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}}); //in reviews collection whatever matches with reviewID delete it immediately
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/listings/${id}`);
}