const express =require("express");
const  mongoose  = require("mongoose");

const medSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    productId: {
        type: String,
        unique: true,
        required: true
      },
      description: {
        type: String,
        required: true,
        trim:true
      },
      price: {
        type: Number,
        required: true
      },
      images: {
        type: [String], // Array of image URLs
        required: true
      },
      brand: {
        type: String,
        required: true
      },
      stockQuantity: {
        type: Number,
        required: true
      },
      attributes: {
        type: Map, // Store attributes as key-value pairs
        of: String
      },
      reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' // Assuming a User model for reviews
              },
          
          rating: {
            type: Number,
            required: true
          },
          comment: {
            type: String
          }
        }
      ],
      seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller' // Assuming a Seller model
      },
      shippingInfo: {
        type: {
          method: String,
          cost: Number,
        }
      },
      availabilityStatus: {
        type: String,
        enum: ['In Stock', 'Out of Stock'],
        default: 'In Stock'
      },
})
//we are creating a new collection
const MedProducts = new mongoose.model("MedProducts",medSchema)

module.exports = MedProducts;