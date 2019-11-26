import appendStyles from "../appendStyles";

const card = (colors, mixins, variables, components) => {
  return {
    root: props => ({
      padding: "1rem",
      borderRadius: variables.borders.radius,
      border: `${variables.borders.width}px solid ${colors.borders.lighterGrey}`,
      transition: "all ease-in-out 200ms",
      "&:hover": {
        "box-shadow": mixins.shadows.light
      },
      ...appendStyles({
        component: "card",
        components,
        style: "root",
        props
      })
    })
  };
};

export default card;
