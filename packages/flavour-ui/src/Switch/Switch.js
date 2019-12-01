import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    display: "inline-block",
    position: "relative",
    backgroundColor: "lightgrey",
    borderRadius: "100px",
    width: "50px",
    height: "25px",
    cursor: "pointer",
    marginRight: "10px",
    transition: "all cubic-bezier(0.4, 0.0, 0.2, 1) 100ms"
  },
  slider: ({ theme, ...props }) => ({
    position: "absolute",
    backgroundColor: theme.colors[props.color ? props.color : "primary"],
    height: "25px",
    borderRadius: "100px",
    left: "0",
    width: "25px",
    transition: "all cubic-bezier(0.4, 0.0, 0.2, 1) 100ms",
    boxShadow: theme.mixins.shadows.light
  }),
  active: ({ theme, ...props }) => ({
    backgroundColor: theme.colors.lighten(
      theme.colors[props.color ? props.color : "primary"],
      0.35
    ),
    "& > $slider": {
      backgroundColor: theme.colors[props.color ? props.color : "primary"],
      left: "calc(100% - 25px)"
    }
  }),
  disabled: {
    pointerEvents: "none",
    "& > $slider": {
      backgroundColor: "lightgrey"
    }
  }
};

const Switch = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    active = false,
    color = "primary",
    disabled = false,
    ...other
  } = props;

  const [sliderActive, setSliderActive] = useState(active);

  return (
    <div
      onClick={() => {
        setSliderActive(!sliderActive);
        if (typeof props.onChange === "function") {
          props.onChange(!sliderActive);
        }
      }}
      className={clsx(classes.root, className, {
        [classes.active]: sliderActive,
        [classes.disabled]: disabled
      })}
      color={color}
      ref={ref}
      disabled={disabled}
      {...other}
    >
      <div className={clsx(classes.slider)} />
    </div>
  );
});

Switch.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
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
  disabled: PropTypes.bool
};

export default withStyles(styles)(Switch);
