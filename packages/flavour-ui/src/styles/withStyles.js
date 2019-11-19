import React from "react";
import { createUseStyles } from "react-jss";

import defaultTheme from "./defaultTheme";
import { useTheme } from "./ThemeProvider";
import _ from "lodash";

const withStyles = styles => Component => {
  let useStyles = createUseStyles(styles);

  const WithStyles = React.forwardRef((props, ref) => {
    const { innerRef, ...other } = props;
    const theme = _.isEmpty(useTheme()) ? defaultTheme : useTheme();
    const classes = useStyles({ ...props, theme });

    return <Component ref={innerRef || ref} classes={classes} {...other} />;
  });

  return WithStyles;
};

export default withStyles;
