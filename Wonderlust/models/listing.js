const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    image:{
        type:String,
        set: (v) => v === "" ? "https://www.magnific.com/free-photos-vectors/tropical-beach" : v,
    }, 
    price: Number,
    location: String,
    country: String
}); 

const Listing = mongoose.model("Listing.Schema");
modules.export = Listing;