import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme, ...props }) => ({
    display: "inline-flex",
    flexDirection: "column"
  })
};

const RadioGroup = React.forwardRef((props, ref) => {
  const { children, classes, color, ...other } = props;

  let [active, setActive] = useState(0);

  return (
    <div className={clsx(classes.root)} ref={ref} {...other}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          className: clsx(child.props.className),
          active: index == active ? true : false,
          color: color || child.props.color,
          onClick: () => {
            setActive(index);
            if (typeof props.onChange === "function") {
              props.onChange(child.props);
            }
          }
        });
      })}
    </div>
  );
});

RadioGroup.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioGroup);
