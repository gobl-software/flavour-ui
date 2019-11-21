const Color = require("color");

const colors = {
  colors: {
    primary: "#0069ff",
    secondary: "#9858f4",
    success: "#28a745",
    danger: "#dc3545",
    text: {
      heading: {
        dark: "#031b4e"
      }
    },
    /**
     * @param color rgb, rgba, hla or hex color string.
     * @param val amount to change rgb values (1 = 100%)
     */
    darken: (color, val) =>
      Color(color)
        .darken(val)
        .string(),
    lighten: (color, val) =>
      Color(color)
        .lighten(val)
        .string()
  }
};

export default colors;
