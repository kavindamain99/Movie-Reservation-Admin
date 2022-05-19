const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "please provide a movie name"],
  },
  desc: {
    type: "string",
    required: [true, "please provide a movie Description"],
  },
  releaseDate: {
    type: "string",
    required: [true, "please provide a movie release Date"],
  },
  cast1: {
    type: "string",
    required: [true, "please provide a movie cast"],
  },
  cast2: {
    type: "string",
    required: [true, "please provide a movie cast"],
  },
  castTime: {
    type: "string",
    required: [true, "please provide a movie time"],
  },
  director: {
    type: "string",
    required: [true, "please provide a movie director name"],
  },
  theater: {
    type: "string",
    required: [true, "please provide a Theater"],
  },
  showTime: {
    type: "string",
    required: [true, "please provide a Show time"],
  },
  fullTicket: {
    type: Number,
    required: [true, "please provide a Ticket Price"],
  },
  halfTicket: {
    type: Number,
    required: [true, "please provide a Ticket Price"],
  },
  img: {
    type: String,
    default: "placeholder.jpg",
    ContentType: String,
  },
});

module.exports = new mongoose.model("movie", movieSchema);
