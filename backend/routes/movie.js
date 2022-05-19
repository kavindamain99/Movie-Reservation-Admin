const express = require("express");
const router = express.Router();

const {
  upload,
  createMovie,
  getAllMovies,
  getSingleMovie,
  deleteMovie,
  updateMovie,
} = require("../controllers/movie");

router.post("/movie", upload.single("img"), createMovie);
router.get("/movies", getAllMovies);
router.get("/movies/:id", getSingleMovie);
router.delete("/movies/:id", deleteMovie);
router.put("/movies/:id", upload.single("img"), updateMovie);

module.exports = router;
