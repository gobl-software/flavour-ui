const colUtil = require("color");

const colors = {
  primary: "#0069ff",
  secondary: "#9858f4",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#16a2b8",
  light: "#f8f9fa",
  dark: "#031b4e",
  default: "#fff",
  text: {
    dark: "#0d1a26",
    dark2: "#5a636e",
    light: "#fff"
  },
  borders: {
    lighterGrey: "#cad2d8"
  },
  backgrounds: {
    lightgrey: "#bfbfbf"
  },
  /**
   * @param color rgb, rgba, hla or hex color string.
   * @param val amount to change rgb values (1 = 100%)
   */
  darken: (color, val) =>
    colUtil(color)
      .darken(val)
      .string(),
  lighten: (color, val) =>
    colUtil(color)
      .lighten(val)
      .string()
};

export default colors;
