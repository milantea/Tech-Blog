const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const sequelize = require("./config/connection");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
