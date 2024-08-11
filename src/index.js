const express = require("express");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

app.use(morgan("combines"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
f;
app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
