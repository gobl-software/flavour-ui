import React, { Component } from "react";

import {
  Button,
  ButtonGroup,
  Container,
  Card,
  Grid,
  Section,
  Typography,
  ThemeProvider
} from "@gobl/flavour-ui";

const theme = {
  typography: { font: "Inter, sans-serif" },
  variables: {
    borders: {
      width: "2px"
    }
  }
};

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
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
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </Typography>
              <Typography variant="h1">Buttons</Typography>
              <br />
              <Typography variant="h5">Basic</Typography>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <Button color="danger">Danger</Button>
              <Button color="warning">Warning</Button>
              <Button color="info">Info</Button>
              <Button color="dark">Dark</Button>
              <Button color="light">Light</Button>
              <Typography variant="h5">Outlined</Typography>
              <Button color="primary" variant="outlined">
                Primary
              </Button>
              <Button color="secondary" variant="outlined">
                Secondary
              </Button>
              <Button color="success" variant="outlined">
                Success
              </Button>
              <Button color="danger" variant="outlined">
                Danger
              </Button>
              <Typography variant="h5">Sizes</Typography>
              <Button color="primary" size="sm">
                Small
              </Button>
              <Button color="secondary" size="md">
                Medium
              </Button>
              <Button color="success" size="lg">
                Large
              </Button>
              <Button color="danger" size="xlg">
                XLarge
              </Button>
              <Typography variant="h5">Button Groups</Typography>
              <ButtonGroup color="primary">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
              <ButtonGroup
                color="secondary"
                variant="outlined"
                size="sm"
                style={{ marginBottom: "1rem" }}
              >
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
              <ButtonGroup color="info" fullWidth={true}>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
              <Typography variant="h5">Full Width</Typography>
              <Button color="primary" size="lg" fullWidth={true}>
                Full Width Button
              </Button>
              <Typography variant="h1">Cards</Typography>
              <Card>
                <Typography variant="p">Example Card</Typography>
              </Card>
              <Typography variant="h1">Grids</Typography>
              <Grid container spacing={1} style={{ marginBottom: "1rem" }}>
                <Card>
                  <Typography variant="p">Column 1</Typography>
                </Card>
                <Card>
                  <Typography variant="p">Column 2</Typography>
                </Card>
              </Grid>
              <Grid container spacing={1} style={{ marginBottom: "1rem" }}>
                <Card>
                  <Typography variant="p">Column 1</Typography>
                </Card>
                <Card>
                  <Typography variant="p">Column 2</Typography>
                </Card>
                <Card>
                  <Typography variant="p">Column 3</Typography>
                </Card>
              </Grid>
              <Grid container spacing={1} style={{ marginBottom: "1rem" }}>
                <Card>
                  <Typography variant="p">Column 1</Typography>
                </Card>
                <Card>
                  <Typography variant="p">Column 2</Typography>
                </Card>
                <Card>
                  <Typography variant="p">Column 3</Typography>
                </Card>
                <Card>
                  <Typography variant="p">Column 4</Typography>
                </Card>
                <Card>
                  <Typography variant="p">Column 5</Typography>
                </Card>
                <Card>
                  <Typography variant="p">Column 6</Typography>
                </Card>
              </Grid>
            </Container>
          </Section>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
