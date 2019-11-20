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
    padding: "0.35rem 1.25rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem",
    margin: "0.2rem 0.2rem",
    cursor: "pointer"
  }),
  primary: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.primary,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.shadows.light
    }
  }),
  secondary: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.secondary,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.shadows.light
    }
  }),
  success: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.success,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.shadows.light
    }
  }),
  danger: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.danger,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.shadows.light
    }
  }),
  "primary-ol": ({ theme }) => ({
    color: theme.colors.primary,
    "background-color": "transparent",
    "border-color": theme.colors.primary,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      color: "#fff",
      backgroundColor: theme.colors.primary,
      "box-shadow": theme.shadows.light
    }
  }),
  "secondary-ol": ({ theme }) => ({
    color: theme.colors.secondary,
    "background-color": "transparent",
    "border-color": theme.colors.secondary,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      color: "#fff",
      backgroundColor: theme.colors.secondary,
      "box-shadow": theme.shadows.light
    }
  }),
  "success-ol": ({ theme }) => ({
    color: theme.colors.success,
    "background-color": "transparent",
    "border-color": theme.colors.success,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      color: "#fff",
      backgroundColor: theme.colors.success,
      "box-shadow": theme.shadows.light
    }
  }),
  "danger-ol": ({ theme }) => ({
    color: theme.colors.danger,
    "background-color": "transparent",
    "border-color": theme.colors.danger,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      color: "#fff",
      backgroundColor: theme.colors.danger,
      "box-shadow": theme.shadows.light
    }
  })
};

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    variant,
    size = "medium",
    type = "outlined",
    ...other
  } = props;

  return (
    <button
      className={clsx(classes.root, classes[variant])}
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
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "primary-ol",
    "secondary-ol",
    "success-ol",
    "danger-ol"
  ]),
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"])
};

export default withStyles(styles)(Button);
