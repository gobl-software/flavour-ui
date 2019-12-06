import appendStyles from "../appendStyles";

const card = components => {
  return {
    root: (props, theme) => ({
      borderRadius: theme.variables.borders.radius,
      border: `1px solid ${theme.colors.borders.lighterGrey}`,
      transition: "all ease-in-out 200ms",
      "box-shadow": theme.mixins.shadows.light,
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
