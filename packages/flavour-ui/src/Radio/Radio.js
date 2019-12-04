import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

const styles = {
  root: ({ theme, ...props }) => ({
    ...theme.components.checkbox.root(props, theme),
    "&:not(last-item)": {
      marginBottom: "1rem"
    }
  }),
  icon: ({ theme, ...props }) => ({
    ...theme.components.checkbox.icon(props, theme)
  }),
  label: ({ theme, ...props }) => ({
    ...theme.typography.checkbox,
    ...theme.components.checkbox.label(props, theme)
  }),
  disabled: ({ theme, ...props }) => ({
    ...theme.components.checkbox.disabled(props, theme)
  })
};

const Radio = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    color = "primary",
    active = false,
    variant,
    label = "",
    disabled = false,
    ...other
  } = props;

  return (
    <div
      className={clsx(
        classes.root,
        { [classes.disabled]: disabled },
        className
      )}
      ref={ref}
      color={color}
      {...other}
    >
      {active ? (
        <MdRadioButtonChecked size={24} className={clsx(classes.icon)} />
      ) : (
        <MdRadioButtonUnchecked size={24} className={clsx(classes.icon)} />
      )}
      <span className={clsx(classes.label)}>{props.label}</span>
    </div>
  );
});

Radio.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
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
  disabled: PropTypes.bool,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["add", "remove"])
};

export default withStyles(styles)(Radio);
