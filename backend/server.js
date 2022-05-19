const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const helmet = require("helmet");
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Cross-Origin-Resource-Policy", "same-site");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    // ...
  })
);
//file uploads

const directory = path.join(__dirname, "/controllers/uploads");
app.use("/controllers/uploads", express.static(directory));

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//routers
const adminRouter = require("./routes/adminUser");
const theaterRouter = require("./routes/movieTheater");
const movieRouter = require("./routes/movie");

app.use("/api/auth/", adminRouter);
app.use("/api/", theaterRouter);
app.use("/api", movieRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDb connected");
  })
  .catch((err) => {
    console.log(err);
  });
