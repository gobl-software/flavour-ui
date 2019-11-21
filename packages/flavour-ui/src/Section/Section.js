import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    "padding-top": "6rem",
    "padding-bottom": "6rem"
  }
};

const Section = React.forwardRef((props, ref) => {
  const { children, classes, ...other } = props;

  return (
    <div className={clsx(classes.root)} ref={ref} {...other}>
      {children}
    </div>
  );
});

Section.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Section);
