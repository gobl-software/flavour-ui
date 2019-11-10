const express = require("express");
const app = express();
const http = require("http");
const server = new http.Server(app);
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const sass = require("node-sass");
const io = require("socket.io")(server);

console.log(chalk.magenta("[flavour] recompiling project..."));

app.use("/dist", express.static("dist"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

sass.render(
  {
    file: path.join(__dirname, "src", "index.scss"),
    outputStyle: "compressed"
  },
  function(error, result) {
    if (!error) {
      fs.writeFile("./dist/flavour.css", result.css, function(err) {
        if (!err) {
          server.listen(8080, () => {
            console.log(chalk.magenta("[flavour] hot-reloading window..."));
          });
        }
      });
    } else {
      console.log(error);
    }
  }
);

let reloading = false;

io.on("connection", () => {
  if (!reloading) {
    reloading = true;
    io.emit("reload");
    console.log(
      chalk.green("[flavour] project running at http://localhost:8080")
    );
  }
});

io.on("done", () => {
  reloading = false;
});
