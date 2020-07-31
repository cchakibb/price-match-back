const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
<<<<<<< HEAD
    
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
=======
  chk_in: String,
  chk_out: String,
  currency: String,
  rates: [{ code: String, name: String, rate: Number, tax: Number }],
  hotel_url: [String],
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
>>>>>>> 26b19716149d25286762cd4c216ec9c4d5ee8a9e
