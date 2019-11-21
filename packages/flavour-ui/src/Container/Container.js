import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    "margin-right": "auto",
    "margin-left": "auto"
  },
  fixed: {
    width: "60%"
  },
  fluid: {
    width: "95%"
  }
};

const Container = React.forwardRef((props, ref) => {
  const { children, classes, variant = "fixed", ...other } = props;

  return (
    <div className={clsx(classes.root, classes[variant])} ref={ref} {...other}>
      {children}
    </div>
  );
});

Container.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  width: PropTypes.oneOf(["fixed", "fluid"])
};

export default withStyles(styles)(Container);
