import React, { Component } from "react";

import { Button, Container, Section } from "@gobl/flavour-ui";

export default class App extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
        </Container>
      </Section>
    );
  }
}
