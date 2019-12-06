import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme, ...props }) => ({
    ...theme.typography.button,
    ...theme.components.button.root(props, theme)
  }),
  normal: ({ theme, ...props }) => ({
    ...theme.components.button.normal(props, theme)
  }),
  outlined: ({ theme, ...props }) => ({
    ...theme.components.button.outlined(props, theme)
  }),
  color: ({ theme, ...props }) => ({
    ...theme.components.button.color(props, theme)
  }),
  startIcon: ({ theme, ...props }) => ({
    ...theme.components.button.startIcon(props, theme)
  }),
  endIcon: ({ theme, ...props }) => ({
    ...theme.components.button.endIcon(props, theme)
  }),
  size: ({ theme, ...props }) => ({
    ...theme.typography.button[props.size ? props.size : "md"]
  }),
  fullWidth: {
    width: "100%"
  },
  label: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    padding: "4px 8px"
  }
};

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    variant = "normal",
    fullWidth = false,
    grouped = false,
    endIcon: endIconProp,
    startIcon: startIconProp,
    ...other
  } = props;

  const startIcon = startIconProp && (
    <span className={clsx(classes.startIcon)}>{startIconProp}</span>
  );

  const endIcon = endIconProp && (
    <span className={clsx(classes.endIcon)}>{endIconProp}</span>
  );

  return (
    <button
      className={clsx(
        classes.root,
        classes.color,
        classes.size,
        classes[variant],
        { [classes.fullWidth]: fullWidth },
        className
      )}
      ref={ref}
      {...other}
    >
      <span className={clsx(classes.label)}>
        {startIcon}
        <span className={clsx(classes.text)}>{children}</span>
        {endIcon}
      </span>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
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
  endIcon: PropTypes.node,
  startIcon: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
  fullWidth: PropTypes.bool
};

export default withStyles(styles)(Button);
