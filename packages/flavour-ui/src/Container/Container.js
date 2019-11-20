import React from "react";

import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    width: "60%",
    "margin-right": "auto",
    "margin-left": "auto"
  }
};

const Container = React.forwardRef((props, ref) => {
  const { children, classes, variant } = props;

  return <div className={clsx(classes.root, classes[variant])}>{children}</div>;
});

export default withStyles(styles)(Container);
