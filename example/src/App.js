import React, { Component } from "react";

import { Button, Container, Section, Typography } from "@gobl/flavour-ui";

export default class App extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Typography variant="h1">h1. Flavour Heading</Typography>
          <Typography variant="h2">h2. Flavour Heading</Typography>
          <Typography variant="h3">h3. Flavour Heading</Typography>
          <Typography variant="h4">h4. Flavour Heading</Typography>
          <Typography variant="h5">h5. Flavour Heading</Typography>
          <Typography variant="h6">h6. Flavour Heading</Typography>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <br />
          <Button variant="primary-ol">Primary</Button>
          <Button variant="secondary-ol">Secondary</Button>
          <Button variant="success-ol">Success</Button>
          <Button variant="danger-ol">Danger</Button>
          <br />
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="secondary" size="md">
            Medium
          </Button>
          <Button variant="success" size="lg">
            Large
          </Button>
          <Button variant="danger" size="xlg">
            XLarge
          </Button>
          <br />
          <Button variant="primary" width="full">
            Primary
          </Button>
        </Container>
      </Section>
    );
  }
}
