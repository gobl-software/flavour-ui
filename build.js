const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const sass = require("node-sass");

console.log(chalk.magenta("[flavour] compiling project for production..."));

sass.render(
  {
    file: path.join(__dirname, "src", "index.scss"),
    outputStyle: "compressed"
  },
  function(error, result) {
    if (!error) {
      fs.writeFile("./dist/flavour.css", result.css, function(err) {
        if (!err) {
          console.log(
            chalk.green("[flavour] compiled flavour.css to 'dist/'.")
          );
        }
      });
      fs.writeFile("./package/flavour.css", result.css, function(err) {
        if (!err) {
          console.log(
            chalk.green("[flavour] compiled flavour.css to 'package/'.")
          );
        }
      });
    } else {
      console.log(error);
    }
  }
);
