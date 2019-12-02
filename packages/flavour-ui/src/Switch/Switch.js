import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme, ...props }) => ({
    ...theme.components.switch.root(props, theme)
  }),
  track: ({ theme, ...props }) => ({
    ...theme.components.switch.track(props, theme)
  }),
  slider: ({ theme, ...props }) => ({
    ...theme.components.switch.slider(props, theme)
  }),
  active: ({ theme, ...props }) => ({
    ...theme.components.switch.active(props, theme)
  }),
  label: ({ theme, ...props }) => ({
    ...theme.components.switch.label(props, theme)
  }),
  disabled: ({ theme, ...props }) => ({
    ...theme.components.switch.disabled(props, theme)
  })
};

const Switch = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    active = false,
    color = "primary",
    disabled = false,
    label = "",
    ...other
  } = props;

  const [sliderActive, setSliderActive] = useState(active);

  return (
    <div className={clsx(classes.root)}>
      <div
        onClick={() => {
          setSliderActive(!sliderActive);
          if (typeof props.onChange === "function") {
            props.onChange(!sliderActive);
          }
        }}
        className={clsx(classes.track, className, {
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
      <span className={clsx(classes.label)}>{props.label}</span>
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
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default withStyles(styles)(Switch);
