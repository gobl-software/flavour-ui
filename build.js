const sass = require("node-sass");
const path = require("path");
const fs = require("fs");

sass.render(
  {
    file: path.join(__dirname, "src", "index.scss")
  },
  function(error, result) {
    if (!error) {
      fs.writeFile(
        path.join(__dirname, "dist", "flavour.css"),
        result.css,
        function(err) {
          if (!err) {
            console.log("Successfully compiled project.");
          }
        }
      );
    } else {
      console.log(error);
    }
  }
);
