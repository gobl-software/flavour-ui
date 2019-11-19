import React, { Component } from "react";

import { Button, ThemeProvider } from "@gobl/flavour-ui";

const myTheme = {
  colorPrimary: "yellow"
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={myTheme}>
        <Button variant="primary">Primary</Button>
      </ThemeProvider>
    );
  }
}
