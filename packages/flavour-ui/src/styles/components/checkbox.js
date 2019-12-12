import appendStyles from "../appendStyles";

const checkbox = components => {
  return {
    root: (props, theme) => ({
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      ...appendStyles({
        component: "checkbox",
        style: "root",
        components,
        props,
        theme
      })
    }),
    icon: (props, theme) => ({
      color: theme.colors[props.color ? props.color : "primary"],
      marginRight: "7px",
      ...appendStyles({
        component: "checkbox",
        style: "icon",
        components,
        props,
        theme
      })
    }),
    label: (props, theme) => ({
      color: theme.colors.text.dark2,
      userSelect: "none",
      marginRight: "10px",
      ...appendStyles({
        component: "checkbox",
        style: "label",
        components,
        props,
        theme
      })
    }),
    disabled: (props, theme) => ({
      pointerEvents: "none",
      "& > $label": {
        color: "grey"
      },
      "& > $icon": {
        color: "grey"
      }
    })
  };
};

export default checkbox;
