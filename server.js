// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");

// Make Server
const app = express();
app.set('port', process.env.PORT || 8080);

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Handlebars
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

// Routing
const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Run Server
app.listen(app.get('port'), () => { console.log("Listening on port " + app.get('port')) });



