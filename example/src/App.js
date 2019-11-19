import React, { Component } from "react";

import { Button } from "@gobl/flavour-ui";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
      </div>
    );
  }
}
