import { button, card, checkbox, switch_ } from "./components";

const components = components => ({
  button: { ...button(components) },
  card: { ...card(components) },
  checkbox: { ...checkbox(components) },
  switch: { ...switch_(components) }
});

export default components;
