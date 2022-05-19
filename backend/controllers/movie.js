const multer = require("multer");
const Movie = require("../model/movie");
//define storage for the images
const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, __dirname + "/uploads");
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, file.originalname.toLowerCase().split(" ").join("-"));
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  //   limit: {
  //     fieldSize: 1024 * 1024 * 3,
  //   },
});

const createMovie = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  let service_pic;
  if (req.file) {
    service_pic = url + "/controllers/uploads/" + req.file.filename;
  }
  console.log(req.body.name);
  let movie = new Movie({
    name: req.body.name,
    desc: req.body.desc,
    releaseDate: req.body.releaseDate,
    cast1: req.body.cast1,
    cast2: req.body.cast2,
    castTime: req.body.castTime,
    director: req.body.director,
    theater: req.body.theater,
    showTime: req.body.showTime,
    fullTicket: req.body.fullTicket,
    halfTicket: req.body.halfTicket,
    img: service_pic,
  });

  try {
    movie = await movie.save();
    res.json(movie);
  } catch (error) {
    res.json(error.message);
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.json(error);
  }
};

const getSingleMovie = async (req, res) => {
  const movieId = req.params.id;

  try {
    const movie = await Movie.findOne({ _id: movieId });
    if (!movie) {
      res.json("Movie not found");
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.json(error);
  }
};

const deleteMovie = async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await Movie.findOneAndDelete({ _id: movieId });

    if (!movie) {
      res.json("movie not find");
    } else {
      res.json({ movie });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (req, res) => {
  const movieId = req.params.id;
  const url = req.protocol + "://" + req.get("host");
  let service_pic;

  if (req.file) {
    service_pic = url + "/controllers/uploads/" + req.file.filename;
  }

  let movie = new Movie({
    name: req.body.name,
    desc: req.body.desc,
    releaseDate: req.body.releaseDate,
    cast1: req.body.cast1,
    cast2: req.body.cast2,
    castTime: req.body.castTime,
    director: req.body.director,
    theater: req.body.theater,
    showTime: req.body.showTime,
    fullTicket: req.body.fullTicket,
    halfTicket: req.body.halfTicket,
    img: service_pic,
  });

  try {
    movie = await Movie.findOneAndUpdate({ _id: movieId }, req.body, {
      new: true,
    });
    res.json(movie);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  upload,
  createMovie,
  getSingleMovie,
  getAllMovies,
  deleteMovie,
  updateMovie,
};
