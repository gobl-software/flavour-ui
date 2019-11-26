import appendStyles from "../appendStyles";

const card = components => {
  return {
    root: (props, theme) => ({
      padding: "1rem",
      borderRadius: theme.variables.borders.radius,
      border: `${theme.variables.borders.width}px solid ${theme.colors.borders.lighterGrey}`,
      transition: "all ease-in-out 200ms",
      "&:hover": {
        "box-shadow": theme.mixins.shadows.light
      },
      ...appendStyles({
        component: "card",
        style: "root",
        components,
        props,
        theme
      })
    })
  };
};

export default card;
