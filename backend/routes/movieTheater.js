const express = require("express");
const router = express.Router();

const { createTheater, getTheater } = require("../controllers/movieTheater");

router.post("/createtheater", createTheater);
router.get("/viewtheater", getTheater);

module.exports = router;
