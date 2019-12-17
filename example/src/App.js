import React, { Component } from "react";

import {
  Button,
  ButtonGroup,
  Container,
  Card,
  Grid,
  Section,
  Typography,
  ThemeProvider,
  Checkbox,
  Switch,
  Radio,
  RadioGroup,
  Select,
  CardImg,
  CardBody,
  CardTitle
} from "@gobl/flavour-ui";

import {
  MdSend,
  MdDelete,
  MdSave,
  MdEdit,
  MdKeyboardArrowRight
} from "react-icons/md";

const theme = {
  typography: {
    font: "Segoe UI, sans-serif"
  },
  variables: {
    borders: {
      radius: 3,
      width: 1
    }
  }
};

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
                  <Button color="primary" outlined>
                    Primary
                  </Button>
                  <Button color="secondary" outlined>
                    Secondary
                  </Button>
                  <Button color="success" outlined>
                    Success
                  </Button>
                  <Button color="danger" outlined>
                    Danger
                  </Button>
                  <Button color="warning" outlined>
                    Warning
                  </Button>
                  <Button color="info" outlined>
                    Info
                  </Button>
                  <Button color="dark" outlined>
                    Dark
                  </Button>
                  <Button color="light" outlined>
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
                  <Button color="primary" block>
                    Block Button
                  </Button>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h5">Button Groups</Typography>
                  <ButtonGroup color="primary">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                  </ButtonGroup>
                  <ButtonGroup block outlined size="md" color="primary">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h5">Button Icons</Typography>
                  <Button color="secondary" endIcon={<MdSend size={20} />}>
                    Send
                  </Button>
                  <Button color="success" startIcon={<MdSave size={20} />}>
                    Save
                  </Button>
                  <Button color="danger" endIcon={<MdDelete size={20} />}>
                    Delete
                  </Button>
                  <ButtonGroup color="primary">
                    <Button startIcon={<MdEdit size={20} />}>Edit</Button>
                    <Button startIcon={<MdSave size={20} />}>Save</Button>
                    <Button endIcon={<MdDelete size={20} />}>Delete</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Typography variant="h1">Checkboxes</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h5">Basic</Typography>
                  <Checkbox label="Primary" color="primary" />
                  <Checkbox label="Secondary" color="secondary" />
                  <Checkbox label="Success" color="success" />
                  <Checkbox label="Danger" color="danger" />
                  <Checkbox label="Warning" color="warning" />
                  <Checkbox label="Info" color="info" />
                  <Checkbox label="Dark" color="dark" />
                  <Checkbox label="Light" color="light" />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Typography variant="h5">Variants</Typography>
                  <Checkbox label="Default" color="primary" checked={true} />
                  <Checkbox label="Disabled" color="primary" disabled />
                  <Checkbox
                    label="Disabled"
                    color="primary"
                    checked={true}
                    disabled
                  />
                  <Checkbox
                    label="Add"
                    color="success"
                    checked={true}
                    variant="add"
                  />
                  <Checkbox
                    label="Remove"
                    color="danger"
                    checked={true}
                    variant="remove"
                  />
                </Grid>
              </Grid>
              <Typography variant="h1">Switches</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                  <Typography variant="h5">Basic</Typography>
                  <Switch color="primary" label="Primary" />
                  <Switch color="secondary" label="Secondary" />
                  <Switch color="success" label="Success" />
                  <Switch color="danger" label="Danger" />
                  <Switch color="warning" label="Warning" />
                  <Switch color="info" label="Info" />
                  <Switch color="dark" label="Dark" />
                  <Switch color="light" label="Light" />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Typography variant="h5">Variants</Typography>
                  <Switch color="primary" label="Disabled" disabled />
                  <Switch
                    color="secondary"
                    active={true}
                    label="Disabled"
                    disabled
                  />
                </Grid>
              </Grid>
              <Typography variant="h1">Radios</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={4}>
                  <RadioGroup color="primary" onChange={(e) => console.log(e)}>
                    <Radio label="Radio 1" />
                    <Radio label="Radio 2" />
                    <Radio label="Radio 3" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <RadioGroup color="secondary">
                    <Radio label="Radio 1" />
                    <Radio disabled label="Disabled 1" />
                    <Radio label="Radio 3" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <RadioGroup color="success">
                    <Radio label="Radio 1" />
                    <Radio disabled label="Disabled 1" />
                    <Radio disabled label="Disabled 2" />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Typography variant="h1">Selects</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={4}>
                  <Select>Dropdown</Select>
                </Grid>
              </Grid>
              <Typography variant="h1">Cards</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={3}>
                  <Card>
                    <CardImg
                      top
                      src="https://polarexpedition.net/assets/img/placeholder.svg"
                    />
                    <CardBody>
                      <CardTitle>Top Image</CardTitle>
                      <Typography variant="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Typography>
                      <Button
                        color="primary"
                        endIcon={<MdKeyboardArrowRight size={20} />}
                      >
                        Read More
                      </Button>
                    </CardBody>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Card>
                    <CardBody>
                      <CardTitle>Bottom Image</CardTitle>
                      <Typography variant="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Typography>
                      <Button
                        color="primary"
                        endIcon={<MdKeyboardArrowRight size={20} />}
                      >
                        Read More
                      </Button>
                    </CardBody>
                    <CardImg
                      bottom
                      src="https://polarexpedition.net/assets/img/placeholder.svg"
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card vertical>
                        <CardImg
                          left
                          src="https://polarexpedition.net/assets/img/placeholder.svg"
                        />
                        <CardBody>
                          <CardTitle>Left Image</CardTitle>
                          <Typography variant="p">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </Typography>
                          <Button
                            color="primary"
                            endIcon={<MdKeyboardArrowRight size={20} />}
                          >
                            Read More
                          </Button>
                        </CardBody>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Card vertical>
                        <CardBody>
                          <CardTitle>Right Image</CardTitle>
                          <Typography variant="p">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </Typography>
                          <Button
                            color="primary"
                            endIcon={<MdKeyboardArrowRight size={20} />}
                          >
                            Read More
                          </Button>
                        </CardBody>
                        <CardImg
                          right
                          src="https://polarexpedition.net/assets/img/placeholder.svg"
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
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
