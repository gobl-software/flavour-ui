import React from "react";

import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    "margin-bottom": "1.1rem"
  },
  h1: ({ theme }) => ({
    ...theme.typography.h1
  }),
  h2: ({ theme }) => ({
    ...theme.typography.h2
  }),
  h3: ({ theme }) => ({
    ...theme.typography.h3
  }),
  h4: ({ theme }) => ({
    ...theme.typography.h4
  }),
  h5: ({ theme }) => ({
    ...theme.typography.h5
  }),
  h6: ({ theme }) => ({
    ...theme.typography.h6
  })
};

const Typography = React.forwardRef((props, ref) => {
  const { children, classes, variant, ...other } = props;

  return (
    <div className={clsx(classes.root, classes[variant])} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default withStyles(styles)(Typography);
