const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  hotelName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },

  phoneNumber: { type: String, required: true },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
    formattedAddress: String,
  },
  competitors: [{ type: String }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
