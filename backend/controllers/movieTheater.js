const Theater = require("../model/movieTheaters");

const createTheater = async (req, res) => {
  try {
    const theater = await Theater.create(req.body);
    res.json(theater);
  } catch (error) {
    console.log(error);
  }
};

const getTheater = async (req, res) => {
  try {
    const theater = await Theater.find();
    res.json(theater);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTheater, getTheater };
