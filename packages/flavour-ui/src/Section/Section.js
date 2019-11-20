import React from "react";

import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    "padding-top": "6rem",
    "padding-bottom": "6rem"
  }
};

const Section = React.forwardRef((props, ref) => {
  const { children, classes, variant } = props;

  return <div className={clsx(classes.root, classes[variant])}>{children}</div>;
});

export default withStyles(styles)(Section);
