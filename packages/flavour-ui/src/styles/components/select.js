import appendStyles from "../appendStyles";

const select = components => {
  return {
    root: (props, theme) => ({
      textAlign: "center",
      border: `${theme.variables.borders.width}px solid transparent`,
      borderRadius: theme.variables.borders.radius,
      cursor: "pointer",
      padding: "0.35rem 1.25rem",
      outline: "none",
      minWidth: "64",
      marginBottom: "0.25rem",
      "&:not(last-child)": {
        marginRight: "0.25rem"
      },
      ...appendStyles({
        component: "select",
        style: "root",
        components,
        props,
        theme
      })
    }),
    normal: (props, theme) => ({
      color: theme.colors.text.light,
      transition: "all cubic-bezier(0.4, 0.0, 0.2, 1) 250ms",
      ...appendStyles({
        component: "select",
        style: "normal",
        components,
        props,
        theme
      })
    }),
    outlined: (props, theme) => ({
      color: `${theme.colors[props.color ? props.color : "primary"]}`,
      backgroundColor: "transparent !important",
      borderColor: theme.colors[props.color ? props.color : "primary"],
      transition: "all cubic-bezier(0.4, 0.0, 0.2, 1) 250ms",
      "&:hover": {
        color: `${theme.colors.text.light} !important`,
        backgroundColor: `${
          theme.colors[props.color ? props.color : "primary"]
        } !important`
      },
      ...appendStyles({
        component: "select",
        style: "outlined",
        components,
        props,
        theme
      })
    }),
    color: (props, theme) => ({
      backgroundColor: theme.colors[props.color ? props.color : "primary"],
      "&:hover": {
        backgroundColor: theme.colors.darken(
          theme.colors[props.color ? props.color : "primary"],
          0.15
        )
      },
      ...appendStyles({
        component: "select",
        style: "color",
        components,
        props,
        theme
      })
    })
  };
};

export default select;
