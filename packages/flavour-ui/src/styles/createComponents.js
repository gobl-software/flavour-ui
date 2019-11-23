const components = (colors, mixins) => ({
  button: {
    root: {
      textAlign: "center",
      verticalAlign: "middle",
      border: "2px solid transparent",
      borderRadius: "0.2rem",
      margin: "0.2rem 0.2rem",
      cursor: "pointer"
    },
    normal: {
      color: colors.text.light,
      transition: "all ease-in-out 200ms",
      "&:hover": {
        "box-shadow": mixins.shadows.light
      }
    }
  }
});

export default components;
