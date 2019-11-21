import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme }) => ({
    ...theme.typography.button,
    textAlign: "center",
    verticalAlign: "middle",
    border: "2px solid transparent",
    borderRadius: "0.2rem",
    margin: "0.2rem 0.2rem",
    cursor: "pointer"
  }),
  normal: ({ theme, ...props }) => ({
    color:
      props.color === "light"
        ? theme.colors.text.dark
        : theme.colors.text.light,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.mixins.shadows.light
    }
  }),
  outlined: ({ theme, ...props }) => ({
    color: `${theme.colors[props.color ? props.color : "primary"]} !important`,
    backgroundColor: "transparent !important",
    borderColor: theme.colors[props.color ? props.color : "primary"],
    transition: "all ease-in-out 200ms",
    "&:hover": {
      color: "#fff !important",
      boxShadow: theme.mixins.shadows.light,
      backgroundColor: `${
        theme.colors[props.color ? props.color : "primary"]
      } !important`
    }
  }),
  color: ({ theme, ...props }) => ({
    backgroundColor: theme.colors[props.color ? props.color : "primary"],
    "&:hover": {
      backgroundColor: theme.colors.darken(
        theme.colors[props.color ? props.color : "primary"],
        0.07
      )
    }
  }),
  size: ({ theme, ...props }) => ({
    ...theme.typography.button[props.size ? props.size : "md"]
  }),
  full: {
    width: "100%"
  }
};

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    variant = "normal",
    width = "wrap",
    ...other
  } = props;

  return (
    <button
      className={clsx(
        classes.root,
        classes.color,
        classes.size,
        classes[variant],
        classes[width]
      )}
      ref={ref}
      {...other}
    >
      <span>{children}</span>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(["normal", "outlined"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
  width: PropTypes.oneOf(["wrap", "full"])
};

export default withStyles(styles)(Button);
