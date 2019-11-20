import React from "react";

import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme }) => ({
    ...theme.typography.button,
    textAlign: "center",
    verticalAlign: "middle",
    border: "2px solid transparent",
    padding: "0.35rem 1.25rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem",
    margin: "0.2rem 0.2rem",
    cursor: "pointer"
  }),
  primary: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.primary,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.shadows.light
    }
  }),
  secondary: ({ theme }) => ({
    color: "#fff",
    backgroundColor: theme.colors.secondary,
    transition: "all ease-in-out 200ms",
    "&:hover": {
      "box-shadow": theme.shadows.light
    }
  })
};

const Button = React.forwardRef((props, ref) => {
  const { children, classes, variant } = props;

  return (
    <button className={clsx(classes.root, classes[variant])}>
      <span>{children}</span>
    </button>
  );
});

export default withStyles(styles)(Button);
