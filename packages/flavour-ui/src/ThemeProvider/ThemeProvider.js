import React from "react";
import PropTypes from "prop-types";
import withTheme from "../styles/withTheme";
import { Provider } from "../styles/createTheme";

const ThemeProvider = React.forwardRef((props, ref) => {
  const { theme, children, ...other } = props;

  return (
    <Provider theme={theme} ref={ref} {...other}>
      {children}
    </Provider>
  );
});

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default withTheme(ThemeProvider);
