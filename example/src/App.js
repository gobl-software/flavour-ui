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

const theme = {};

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Section>
            <Container lg="fixed" md="fixed" xs="fluid">
              <Typography variant="h1">Typography</Typography>
              <br />
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h1">h1. Flavour Heading</Typography>
                  <Typography variant="h2">h2. Flavour Heading</Typography>
                  <Typography variant="h3">h3. Flavour Heading</Typography>
                  <Typography variant="h4">h4. Flavour Heading</Typography>
                  <Typography variant="h5">h5. Flavour Heading</Typography>
                  <Typography variant="h6">h6. Flavour Heading</Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography variant="p">
                    p. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="h1">Buttons</Typography>
              <br />
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h5">Basic</Typography>
                  <Button color="primary">Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="success">Success</Button>
                  <Button color="danger">Danger</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="info">Info</Button>
                  <Button color="dark">Dark</Button>
                  <Button color="light">Light</Button>
                </Grid>
                <Grid item xs={12} lg={6}>
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
                  <Button color="warning" variant="outlined">
                    Warning
                  </Button>
                  <Button color="info" variant="outlined">
                    Info
                  </Button>
                  <Button color="dark" variant="outlined">
                    Dark
                  </Button>
                  <Button color="light" variant="outlined">
                    Light
                  </Button>
                </Grid>
                <Grid item xs={12} lg={6}>
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
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h5">Full Width</Typography>
                  <Button color="primary" size="lg" fullWidth={true}>
                    Full Width Button
                  </Button>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h5">Button Groups</Typography>
                  <ButtonGroup color="primary">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                  </ButtonGroup>
                  <ButtonGroup
                    color="secondary"
                    fullWidth={true}
                    variant="outlined"
                    style={{ marginBottom: "1rem" }}
                  >
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>

              <Typography variant="h1">Cards</Typography>
              <Card>
                <Typography variant="p">Example Card</Typography>
              </Card>
              <Typography variant="h1">Grids</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={4}>
                  <Card>
                    <Typography variant="p">lg=4</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Card>
                    <Typography variant="p">lg=4</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Card>
                    <Typography variant="p">lg=4</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                  <Card>
                    <Typography variant="p">lg=2</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Card>
                    <Typography variant="p">lg=6</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Card>
                    <Typography variant="p">lg=4</Typography>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Section>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
