import React from "react";
import PropTypes from "prop-types";
import defaultTheme from "./defaultTheme";
import merge from "deepmerge";

const withTheme = Component => {
  const WithTheme = React.forwardRef((props, ref) => {
    const { innerRef, theme, ...other } = props;

    //Combine default theme with user theme.
    const combinedTheme = merge.all([defaultTheme, theme]);

    return <Component theme={combinedTheme} ref={innerRef || ref} {...other} />;
  });

  WithTheme.propTypes = {
    theme: PropTypes.object.isRequired
  };

  WithTheme.defaultProps = Component.defaultProps;

  return WithTheme;
};

export default withTheme;
