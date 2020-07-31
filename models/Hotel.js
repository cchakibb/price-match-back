const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    
        chk_in: String,
        chk_out: String,
        currency: String,
        rates: [
        {
        code: String,
        name: String,
        rate: Number,
        tax: Number,
        },
       
        ],
        hotel_url: [String],
        }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;