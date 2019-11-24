import appendStyles from "../appendStyles";

const button = (colors, mixins, components) => {
  return {
    root: props => ({
      textAlign: "center",
      border: "2px solid transparent",
      borderRadius: "0.2rem",
      cursor: "pointer",
      padding: "0.35rem 1.25rem",
      outline: "none",
      minWidth: "64",
      "&:not(last-child)": {
        marginRight: "0.25rem"
      },
      ...appendStyles({
        component: "button",
        components,
        style: "root",
        props
      })
    }),
    normal: props => ({
      color: colors.text.light,
      transition: "all ease-in-out 200ms",
      "&:hover": {
        "box-shadow": mixins.shadows.light
      },
      ...appendStyles({
        component: "button",
        components,
        style: "normal",
        props
      })
    }),
    outlined: props => ({
      color: `${colors[props.color ? props.color : "primary"]}`,
      backgroundColor: "transparent !important",
      borderColor: colors[props.color ? props.color : "primary"],
      transition: "all ease-in-out 200ms",
      "&:hover": {
        color: `${colors.text.light} !important`,
        boxShadow: mixins.shadows.light,
        backgroundColor: `${
          colors[props.color ? props.color : "primary"]
        } !important`
      },
      ...appendStyles({
        component: "button",
        components,
        style: "outlined",
        props
      })
    }),
    color: props => ({
      backgroundColor: colors[props.color ? props.color : "primary"],
      "&:hover": {
        backgroundColor: colors.darken(
          colors[props.color ? props.color : "primary"],
          0.07
        )
      },
      ...appendStyles({
        component: "button",
        components,
        style: "color",
        props
      })
    })
  };
};

export default button;
