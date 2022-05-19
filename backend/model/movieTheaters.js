const mongoose = require("mongoose");

const TheaterSchema = new mongoose.Schema(
  {
    theaterName: {
      type: "string",
      required: [true, "please provide a Theater Name"],
    },
    location: {
      type: "string",
      required: [true, "please provide a Location"],
    },
    contactNumber: {
      type: "string",
      required: [true, "please provide a Contact Number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Theater", TheaterSchema);
