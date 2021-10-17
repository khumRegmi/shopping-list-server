const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const items = require("./routes/api/items");

const app = express();
//bodyParser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use Routes
app.use("/api/items", items);

// DB config
const db = require("./config/keys").mongoURI;

const port = process.env.PORT || 5000;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() =>
    app.listen(port, () => console.log(`Server started on port ${port}`))
  )
  .catch((err) => console.log(err));
