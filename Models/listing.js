// const mongoose=require("mongoose");
// const Schema=mongoose.Schema;

// const listingSchema=new Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     description:String,
//     image:{
//     type:String,
//     default:
//         "https://images.pexels.com/photos/3845510/pexels-photo-3845510.jpeg?cs=srgb&dl=pexels-kelly-lacy-3845510.jpg&fm=jpg",
//     set:(v) => v ===""? "https://images.pexels.com/photos/3845510/pexels-photo-3845510.jpeg?cs=srgb&dl=pexels-kelly-lacy-3845510.jpg&fm=jpg"
//         :v,
//     },
//     price:Number,
//     location:String,
//     country:String,
// });

// const Listing=mongoose.model("Listing",listingSchema);
// module.exports=Listing;












// const { ref } = require("joi");
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const Review = require("./review.js");

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     filename: String,
//     url: {
//       type: String,
//       default:
//         "https://images.pexels.com/photos/3845510/pexels-photo-3845510.jpeg?cs=srgb&dl=pexels-kelly-lacy-3845510.jpg&fm=jpg",
//     },
//   },
//   price: Number,
//   location: String,
//   country: String,
//   reviews: [
//     {
//       type: Schema.Types.ObjectId, // store the object ID took reference from model
//       ref: "Review",
//     },
//   ],
// });

// listingSchema.post("findOneAndDelete", async (listing) => {
//   if (listing) {
//     await Review.deleteMany({ _id: { $in: listing.reviews } });
//   }
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;












// suja TA code
const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,

image: {
    // url :{
    //         type: String,
    //         set: (v) => v === "" ? "https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/76f85a0c-b3e2-4f1d-9aa9-d7838f2393c6.jpeg?im_w=1200&im_q=highq" : v
    //     },
    // filename: String
    url:String,
    filename:String,
  },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,  // store the object ID took reference from model 
            ref: "Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId, //thoses who will be owner must be the user means it must hace ID
        ref:"User",
    },
    geometry:{
        type: {
              type: String, // Don't do `{ location: { type: String } }`
              enum: ['Point'], // 'location.type' must be 'Point'
              required: true
            },
            coordinates: {
              type: [Number],
              required: true
            }
          }
    
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;






