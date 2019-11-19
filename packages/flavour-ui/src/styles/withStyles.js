import React from "react";
import { createUseStyles, createTheming } from "react-jss";
import defaultTheme from "./defaultTheme";
import { useTheme } from "./ThemeProvider";

const withStyles = (styles, options = {}) => Component => {
  const { withTheme = false } = options;
  let useStyles = createUseStyles(styles);

  const WithStyles = React.forwardRef((props, ref) => {
    const { innerRef, ...other } = props;
    const theme = withTheme ? useTheme() : defaultTheme;
    const classes = useStyles({ ...props, theme });

    return <Component ref={innerRef || ref} classes={classes} {...other} />;
  });

  return WithStyles;
};

export default withStyles;
