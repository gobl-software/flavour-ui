import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    "margin-bottom": "1.5rem",
    "margin-top": "1.5rem"
  },
  h1: ({ theme }) => ({
    ...theme.typography.h1,
    color: theme.colors.text.dark
  }),
  h2: ({ theme }) => ({
    ...theme.typography.h2,
    color: theme.colors.text.dark
  }),
  h3: ({ theme }) => ({
    ...theme.typography.h3,
    color: theme.colors.text.dark
  }),
  h4: ({ theme }) => ({
    ...theme.typography.h4,
    color: theme.colors.text.dark
  }),
  h5: ({ theme }) => ({
    ...theme.typography.h5,
    color: theme.colors.text.dark
  }),
  h6: ({ theme }) => ({
    ...theme.typography.h6,
    color: theme.colors.text.dark
  }),
  p: ({ theme }) => ({
    ...theme.typography.p,
    color: theme.colors.text.dark
  })
};

const Typography = React.forwardRef((props, ref) => {
  const { children, classes, variant = "p", ...other } = props;

  return (
    <p className={clsx(classes.root, classes[variant])} ref={ref} {...other}>
      {children}
    </p>
  );
});

Typography.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};

export default withStyles(styles)(Typography);
