// Required External Modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const appRoutes = require("./routes/main");
const aboutUsRouter = require("./routes/about");

// App Variables
const app = express();
const port = process.env.PORT || "8000";

// App Configuration
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

// App Routes
app.use(appRoutes);
app.use(aboutUsRouter);

// Server Activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
