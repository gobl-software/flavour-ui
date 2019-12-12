import appendStyles from "../appendStyles";

const switch_ = components => {
  return {
    root: (props, theme) => ({
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      ...appendStyles({
        component: "switch",
        style: "root",
        components,
        props,
        theme
      })
    }),
    track: (props, theme) => ({
      display: "inline-block",
      position: "relative",
      backgroundColor: theme.colors.backgrounds.lightgrey,
      borderRadius: "100px",
      width: "50px",
      height: "25px",
      cursor: "pointer",
      marginRight: "7px",
      transition: "all cubic-bezier(0.4, 0.0, 0.2, 1) 100ms",
      ...appendStyles({
        component: "switch",
        style: "track",
        components,
        props,
        theme
      })
    }),
    slider: (props, theme) => ({
      position: "absolute",
      boxSizing: "border-box",
      backgroundColor: "white",
      height: "21px",
      borderRadius: "100px",
      top: "2px",
      left: "2px",
      width: "21px",
      transition: "all cubic-bezier(0.4, 0.0, 0.2, 1) 100ms",
      boxShadow: theme.mixins.shadows.light,
      ...appendStyles({
        component: "switch",
        style: "slider",
        components,
        props,
        theme
      })
    }),
    active: (props, theme) => ({
      backgroundColor: theme.colors[props.color ? props.color : "primary"],
      "& > $slider": {
        left: "calc(100% - 23px)"
      },
      ...appendStyles({
        component: "switch",
        style: "active",
        components,
        props,
        theme
      })
    }),
    label: (props, theme) => ({
      ...theme.typography.checkbox,
      color: theme.colors.text.dark2,
      userSelect: "none",
      marginRight: "10px",
      ...appendStyles({
        component: "switch",
        style: "label",
        components,
        props,
        theme
      })
    }),
    disabled: (props, theme) => ({
      pointerEvents: "none",
      backgroundColor: theme.colors.backgrounds.lightgrey,

      "& > $slider": {
        backgroundColor: theme.colors.backgrounds.lightgrey
      },
      ...appendStyles({
        component: "switch",
        style: "disabled",
        components,
        props,
        theme
      })
    })
  };
};

export default switch_;
