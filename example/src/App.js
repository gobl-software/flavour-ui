import React, { Component } from "react";

import { Button, Container, Section, Typography } from "@gobl/flavour-ui";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <Container>
            <Typography variant="h1">Typography</Typography>
            <br />
            <Typography variant="h1">h1. Flavour Heading</Typography>
            <Typography variant="h2">h2. Flavour Heading</Typography>
            <Typography variant="h3">h3. Flavour Heading</Typography>
            <Typography variant="h4">h4. Flavour Heading</Typography>
            <Typography variant="h5">h5. Flavour Heading</Typography>
            <Typography variant="h6">h6. Flavour Heading</Typography>
            <Typography variant="p">
              p. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Typography>
          </Container>
        </Section>
        <Section>
          <Container>
            <Typography variant="h1">Buttons</Typography>
            <br />
            <Typography variant="h4">Basic</Typography>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Typography variant="h4">Outlined</Typography>
            <Button variant="primary-ol">Primary</Button>
            <Button variant="secondary-ol">Secondary</Button>
            <Button variant="success-ol">Success</Button>
            <Button variant="danger-ol">Danger</Button>
            <Typography variant="h4">Sizes</Typography>
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
            <Typography variant="h4">Full Width</Typography>
            <Button variant="primary" size="lg" width="full">
              Full Width Button
            </Button>
          </Container>
        </Section>
      </React.Fragment>
    );
  }
}
