import React from "react";
import PropTypes from "prop-types";
import { createFlavourTheme } from "./createFlavourTheme";

const withTheme = Component => {
  const WithTheme = React.forwardRef((props, ref) => {
    const { innerRef, theme, ...other } = props;

    //Combine default theme with user theme.
    const flavourTheme = createFlavourTheme(theme);

    return <Component theme={flavourTheme} ref={innerRef || ref} {...other} />;
  });

  WithTheme.propTypes = {
    theme: PropTypes.object.isRequired
  };

  WithTheme.defaultProps = Component.defaultProps;

  return WithTheme;
};

export default withTheme;
