import appendStyles from "../appendStyles";

const button = components => {
  return {
    root: (props, theme) => ({
      display: "inline-flex",
      verticalAlign: "middle",
      justifyContent: "center",
      alignItems: "center",
      border: `${theme.variables.borders.width}px solid transparent`,
      borderRadius: theme.variables.borders.radius,
      cursor: "pointer",
      outline: "none",
      marginBottom: "0.25rem",
      "&:not(last-child)": {
        marginRight: "0.25rem"
      },
      ...appendStyles({
        component: "button",
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
        component: "button",
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
        backgroundColor: `${theme.colors.darken(
          theme.colors[props.color ? props.color : "primary"],
          0.1
        )} !important`,
        borderColor: `${theme.colors.darken(
          theme.colors[props.color ? props.color : "primary"],
          0.1
        )} !important`
      },
      "&:active": {
        color: `${theme.colors.text.light} !important`,
        backgroundColor: `${theme.colors.darken(
          theme.colors[props.color ? props.color : "primary"],
          0.25
        )} !important`,
        borderColor: `${theme.colors.darken(
          theme.colors[props.color ? props.color : "primary"],
          0.25
        )} !important`
      },
      ...appendStyles({
        component: "button",
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
          0.1
        )
      },
      "&:active": {
        backgroundColor: theme.colors.darken(
          theme.colors[props.color ? props.color : "primary"],
          0.25
        )
      },
      ...appendStyles({
        component: "button",
        style: "color",
        components,
        props,
        theme
      })
    }),
    endIcon: (props, theme) => ({
      display: "inline-flex",
      verticalAlign: "middle",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 6,
      ...appendStyles({
        component: "button",
        style: "endIcon",
        components,
        props,
        theme
      })
    }),
    startIcon: (props, theme) => ({
      display: "inline-flex",
      verticalAlign: "middle",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 6,
      ...appendStyles({
        component: "button",
        style: "startIcon",
        components,
        props,
        theme
      })
    })
  };
};

export default button;
