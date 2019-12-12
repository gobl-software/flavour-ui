import appendStyles from "../appendStyles";

const card = components => {
  return {
    root: (props, theme) => ({
      display: "flex",
      flexDirection: "column",
      borderRadius: theme.variables.borders.radius,
      border: `1px solid ${theme.colors.borders.lighterGrey}`,
      transition: "all ease-in-out 200ms",
      "box-shadow": theme.mixins.shadows.button,
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
