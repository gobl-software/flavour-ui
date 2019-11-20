<p align="center"><img  width="135" src="https://svgshare.com/i/G40.svg" /></p>
<h1 align="center">FlavourUI</h1>
<p align="center"><a href="https://github.com/facebook/react">React</a> UI component library built with flavour!</p>
<p align="center">
  <img alt="Travis (.org)" src="https://img.shields.io/travis/gobl-software/FlavourUI?style=flat-square">
  <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/71c28e9b05424da7a084c29304e2a4fb?style=flat-square">
  <img alt="David" src="https://img.shields.io/david/gobl-software/FlavourUI?style=flat-square">
  <img alt="David" src="https://img.shields.io/david/dev/gobl-software/FlavourUI?style=flat-square">
  <img alt="David" src="https://img.shields.io/david/peer/gobl-software/FlavourUI?style=flat-square">
</p>

## Quick Start

Install the package using npm:

```bash
npm i @gobl/flavour-ui
```

or by using yarn:

```bash
yarn add @gobl/flavour-ui
```

### Render a Button Component

```javascript
import React, { Component } from "react";

import { Button } from "@gobl/flavour-ui";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    );
  }
}
```

## Development

Clone the repository with:

```bash

git clone https://github.com/gobl-software/FlavourUI.git

cd ./FlavourUI
```

Install dependencies with:

```bash
npm install
```

Start the development server:

```bash
npm run package:dev
```

Now you can edit the packages/flavour-ui directory and the example will update automatically.

### Playground for developing styles

Run development server:

```bash

npm run build:dev

```

#### Hot-Reloading

Visit [locahost:8080](http://localhost:8080) and make some changes.

## Production

Build project using:

```bash

npm run build:prod

```

Outputs compiled file to /dist.

## Installation

Install flavour-ui package using:

```bash

npm install @gobl/flavour-ui

```

## Fonts

[Inter](https://github.com/rsms/inter)
[Metropolis](https://github.com/chrismsimpson/Metropolis)

### Collection of all components - [List](https://gobl-software.github.io/FlavourUI/)
