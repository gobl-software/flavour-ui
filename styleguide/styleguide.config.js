const path = require("path");

module.exports = {
  components: "../packages/flavour-ui/src/**/[A-Z]*.js",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    resolve: {
      alias: {
        react: path.resolve(__dirname, "node_modules/react"),
        "react-dom": path.resolve(__dirname, "node_modules/react-dom")
      }
    }
  },
  styleguideDir: "../docs",
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css"
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Inter", sans-serif'
    }
  }
};
