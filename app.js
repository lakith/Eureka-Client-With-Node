var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const errorHandle = require("./src/middleware/errorHandler");
const connectEureka = require("./src/middleware/EurekaConnect")
var indexRouter = require("./src/routes/index");
var app = express();

app.use(logger("dev"));
app.use(express.json());

// request payload middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

connectEureka()
// error handling middleware
app.use(errorHandle);

module.exports = app;
