import React from "react";
import { createUseStyles, createTheming } from "react-jss";
import defaultTheme from "./defaultTheme";

//const ThemeContext = React.createContext({});

//const theming = createTheming(ThemeContext);

//const { useTheme } = theming;

const withStyles = styles => Component => {
  let useStyles = createUseStyles(styles);

  const WithStyles = React.forwardRef((props, ref) => {
    const { innerRef, ...other } = props;
    const theme = defaultTheme;
    const classes = useStyles({ ...props, theme });

    return <Component ref={innerRef || ref} classes={classes} {...other} />;
  });

  return WithStyles;
};

export default withStyles;
