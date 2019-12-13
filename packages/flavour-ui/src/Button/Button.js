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
  disabled: ({ theme, ...props }) => ({
    pointerEvents: "none",
    backgroundColor: theme.colors.backgrounds.lightgrey
  }),
  block: {
    width: "100%"
  },
  label: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textShadow: "-1px -1px 0 rgba(0,0,0,0.10)"
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
    outlined = false,
    block = false,
    grouped = false,
    disabled = false,
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
        classes.normal,
        {
          [classes.block]: block,
          [classes.outlined]: outlined,
          [classes.disabled]: disabled
        },
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
   * Set true to change button to outlined type.
   */
  outlined: PropTypes.bool,
  /**
   * Set Button to disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * Color the Button using one of the theme defaults.
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
  ]),
  /**
   * Set icon to display on the right side of the text.
   */
  endIcon: PropTypes.node,
  /**
   * Set icon to display on the left side of the text.
   */
  startIcon: PropTypes.node,
  /**
   * Changes the size of the button.
   */
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
  /**
   * Sets the button to the full width of the parent container.
   */
  block: PropTypes.bool
};

export default withStyles(styles)(Button);
