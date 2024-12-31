// const Joi = require('joi');

// module.exports.listingSchema=Joi.object({
//     listing:Joi.object({
//         title:Joi.string().required,
//         description:Joi.string().required,
//         location:Joi.string().required,
//         country:Joi.string().required,
//         price:Joi.number().required().min(0),
//         image:Joi.string().allow("",null)
//     }).required()
// });

// module.exports.reviewSchema=Joi.object({
//     review:Joi.object({
//         rating:Joi.number().required().min(1).max(5),
//         comment:Joi.string().required(),
//     }).required(),
// });







// module.exports.listingSchema = Joi.object({
//     listing: Joi.object({
//         title: Joi.string().required(), // Added missing parentheses
//         description: Joi.string().required(),
//         location: Joi.string().required(),
//         country: Joi.string().required(),
//         price: Joi.number().required().min(0),
//         image: Joi.string().allow("", null)
//     }).required()
// });

// module.exports.reviewSchema = Joi.object({
//     review: Joi.object({
//         rating: Joi.number().required().min(1).max(5),
//         comment: Joi.string().required(),
//     }).required(),
// });


//real code which makes run

// const Joi = require('joi');
// // module.exports.listingSchema = Joi.object({
// //     listing: Joi.object({
// //         title: Joi.string().required(),
// //         description: Joi.string().required(),
// //         location: Joi.string().required(),
// //         price: Joi.number().required().min(0),
// //         country: Joi.string().required(),
// //         image: Joi.object({
// //             filename: Joi.string().required(), 
// //             url: Joi.string().uri().allow("", null), // Ensure it's a string/URL
// //         }).required(),
// //     }).required()
// // });

// module.exports.listingSchema = Joi.object({
//     listing: Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         location: Joi.string().required(),
//         country: Joi.string().required(),
//         price: Joi.number().required().min(0),
//         image: Joi.object({ 
//             url: Joi.string().allow("", null) 
//         })
//     }).required()
// });

// module.exports.reviewSchema = Joi.object({
//         review: Joi.object({
//             rating: Joi.number().required().min(1).max(5),
//             comment: Joi.string().required(),
//         }).required(),
//     });



    // const Joi = require('joi');
    const Joi = require('joi');

    module.exports.listingSchema = Joi.object({
        listing: Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            location: Joi.string().required(),
            country: Joi.string().required(),
            price: Joi.number().required().min(0),
            image: Joi.object({ 
                url: Joi.string().allow("", null) 
            })
        }).required()
    });
    
    module.exports.reviewSchema = Joi.object({
            review: Joi.object({
                rating: Joi.number().required().min(1).max(5),
                comment: Joi.string().required(),
            }).required(),
        });