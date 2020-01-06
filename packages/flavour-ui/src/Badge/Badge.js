import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  /**
   * @todo Move styles over to theme styles
   */
  root: ({ theme, ...props }) => ({
    borderRadius: theme.variables.borders.radius,
    color: "white",
    padding: "4px 10px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600"
  }),
  color: ({ theme, ...props }) => ({
    backgroundColor: props.color
      ? theme.colors[props.color]
      : theme.colors.primary
  })
};

const Badge = React.forwardRef((props, ref) => {
  const { children, classes, className, ...other } = props;

  return (
    <span
      className={clsx(classes.root, classes.color, className)}
      ref={ref}
      {...other}
    >
      {children}
    </span>
  );
});

Badge.propTypes = {
  /**
   * Content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles of the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Color the Badge using one of the theme defaults.
   */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ])
};

export default withStyles(styles)(Badge);
