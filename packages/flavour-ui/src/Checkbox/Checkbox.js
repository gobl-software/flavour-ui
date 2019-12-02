import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdAddBox,
  MdIndeterminateCheckBox
} from "react-icons/md";

const styles = {
  root: ({ theme, ...props }) => ({
    ...theme.components.checkbox.root(props, theme)
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

const Checkbox = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    color = "primary",
    checked = false,
    variant,
    label = "",
    disabled = false,
    ...other
  } = props;

  let [checkedBool, setCheckedBool] = useState(checked);

  const setIcon = variant => {
    switch (variant) {
      case "add":
        return <MdAddBox size={24} className={clsx(classes.icon)} />;
      case "remove":
        return (
          <MdIndeterminateCheckBox size={24} className={clsx(classes.icon)} />
        );
      default:
        return <MdCheckBox size={24} className={clsx(classes.icon)} />;
    }
  };

  return (
    <div
      onClick={() => {
        setCheckedBool(!checkedBool);
        if (typeof props.onChange === "function") {
          props.onChange(!checkedBool);
        }
      }}
      className={clsx(classes.root, { [classes.disabled]: disabled })}
      ref={ref}
      color={color}
      {...other}
    >
      {checkedBool ? (
        setIcon(variant)
      ) : (
        <MdCheckBoxOutlineBlank size={24} className={clsx(classes.icon)} />
      )}
      <span className={clsx(classes.label)}>{props.label}</span>
    </div>
  );
});

Checkbox.propTypes = {
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

export default withStyles(styles)(Checkbox);
