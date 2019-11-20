import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import defaultTheme from "./defaultTheme";
import { useTheme } from "./ThemeProvider";
import _ from "lodash";

const withStyles = styles => Component => {
  let useStyles = createUseStyles(styles);

  const WithStyles = React.forwardRef((props, ref) => {
    const { innerRef, ...other } = props;

    //Check whether application is using a theme from the user (<ThemeProvider>). Else use defaultTheme.
    const theme = _.isEmpty(useTheme()) ? defaultTheme : useTheme();

    //Give component new prop named classes that contains styles with theme variables injected.
    const classes = useStyles({ ...props, theme });

    return <Component ref={innerRef || ref} classes={classes} {...other} />;
  });

  WithStyles.propTypes = {
    classes: PropTypes.object
  };

  WithStyles.defaultProps = Component.defaultProps;

  return WithStyles;
};

export default withStyles;
