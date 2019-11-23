import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme }) => ({
    ...theme.typography.button,
    ...theme.components.button.root
  }),
  normal: ({ theme }) => ({
    ...theme.components.button.normal
  }),
  outlined: ({ theme, ...props }) => ({
    ...theme.components.button.outlined(props)
  }),
  color: ({ theme, ...props }) => ({
    ...theme.components.button.color(props)
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
