const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dotenv = require("dotenv");
const app = express();


const pageRouter = require("./routes/pageRouter");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded(`${__dirname}/public`));

app.get("/", pageRouter);
app.get("/:id", pageRouter);

app.get("/:primCat/:secCat", pageRouter);

app.listen(3000, (req, res) => {
  console.log("App is listening on port 3000");
});
