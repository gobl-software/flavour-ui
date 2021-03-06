<p align="center"><img  width="135" src="https://svgshare.com/i/G40.svg" /></p>
<h1 align="center">FlavourUI</h1>
<p align="center">Highly theme-able <a href="https://github.com/facebook/react">React</a> component library built with flavour.</p>
<p align="center"><sub>Inspired by <a href="https://github.com/mui-org/material-ui">material-ui</a></sub></p>
<p align="center">
  <img alt="Travis (.org)" src="https://img.shields.io/travis/gobl-software/flavour-ui?style=flat-square">
  <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/71c28e9b05424da7a084c29304e2a4fb?style=flat-square">
  <img alt="David" src="https://img.shields.io/david/gobl-software/flavour-ui?style=flat-square">
  <img alt="David" src="https://img.shields.io/david/dev/gobl-software/flavour-ui?style=flat-square">
  <img alt="David" src="https://img.shields.io/david/peer/gobl-software/flavour-ui?style=flat-square">
</p>

<h2 align="center">⚠ THIS REPOSITORY IS IN DEVELOPMENT ⚠</h2>
<p align="center"><b>FlavourUI is still in active development and has not yet been released for production use.</b></p>
<p align="center">If you would like to participate in the development of FlavourUI email me. 😊</p>

## Quick Start

Install the package using npm:

```bash
npm i @gobl/flavour-ui
```

or by using yarn:

```bash
yarn add @gobl/flavour-ui
```

### Link [Inter](https://github.com/rsms/inter) Font-Face to index

```html
<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
```

### Render a Button Component

```jsx
import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@gobl/flavour-ui";

const App = (props) => {
  return (
    <React.Fragment>
      <Button color="primary">Primary</Button>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### Theming

```jsx
...
import { ThemeProvider, Button } from "@gobl/flavour-ui";

const theme = {
  typography: {
    font: "Arial, sans-serif"
  }
  colors: {
    primary: "hotpink"
  },
  components: {
    button: {
      root: {
        padding: "0.35rem 1.25rem"
      }
    }
  }
  ...
}

...

<ThemeProvider theme={ theme }>
  <Button color="primary">Hot Pink Button!</Button>
</ThemeProvider>

...
```

### [Documentation](https://gobl-software.github.io/flavour-ui/)

## Library Progress

###### 🟩 Completed | ⬜ Next

- 🟩 Buttons
- 🟩 ButtonGroups
- 🟩 Checkboxes
- 🟩 Containers
- 🟩 Typography
- 🟩 Grids
- 🟩 Radios
- 🟩 RadioGroups
- 🟩 Switches
- ⬜ Date/Time
- ⬜ TextField
- ⬜ Select
- ⬜ Sliders

## Development

Clone the repository with:

```bash

git clone https://github.com/gobl-software/flavour-ui.git

cd flavour-ui
```

Install dependencies with npm:

```bash
npm install
```

or using yarn:

```bash
yarn install
```

Start the development server:

```bash
npm run package:dev
```

Now you can edit the packages/flavour-ui directory and the example will update automatically.

### Developing [styleguidist](https://github.com/styleguidist/react-styleguidist) docs

Run the development server:

```bash

npm run sg:server

```

Build the site using:

```bash

npm run sg:build

```

## Fonts

- [Inter](https://github.com/rsms/inter)
