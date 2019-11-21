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
  primary: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.primary,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.mixins.shadows.light,
      backgroundColor: theme.colors.darken(theme.colors.primary, 0.07)
    }
  }),
  secondary: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.secondary,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.mixins.shadows.light,
      backgroundColor: theme.colors.darken(theme.colors.secondary, 0.07)
    }
  }),
  success: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.success,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.mixins.shadows.light,
      backgroundColor: theme.colors.darken(theme.colors.success, 0.07)
    }
  }),
  danger: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.danger,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.mixins.shadows.light,
      backgroundColor: theme.colors.darken(theme.colors.danger, 0.07)
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
      "box-shadow": theme.mixins.shadows.light
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
      "box-shadow": theme.mixins.shadows.light
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
      "box-shadow": theme.mixins.shadows.light
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
      "box-shadow": theme.mixins.shadows.light
    }
  }),
  sm: ({ theme }) => ({
    ...theme.typography.button.sm
  }),
  md: ({ theme }) => ({
    ...theme.typography.button.md
  }),
  lg: ({ theme }) => ({
    ...theme.typography.button.lg
  }),
  xlg: ({ theme }) => ({
    ...theme.typography.button.xlg
  }),
  full: {
    width: "100%"
  }
};

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    variant,
    size = "md",
    width = "wrap",
    ...other
  } = props;

  return (
    <button
      className={clsx(
        classes.root,
        classes[variant],
        classes[width],
        classes[size]
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
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
  width: PropTypes.oneOf(["wrap", "full"])
};

export default withStyles(styles)(Button);
