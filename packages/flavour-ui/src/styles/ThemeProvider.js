import React from "react";
import { createTheming } from "react-jss";

//Context for theme defined by user. (When <ThemeProvider theme={theme}> is used.)

const ThemeContext = React.createContext({});

const theming = createTheming(ThemeContext);

const { ThemeProvider, useTheme } = theming;

export { ThemeProvider, useTheme };
