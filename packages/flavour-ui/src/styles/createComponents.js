import { button, card, checkbox, switch_, select } from "./components";

const components = components => ({
  button: { ...button(components) },
  card: { ...card(components) },
  checkbox: { ...checkbox(components) },
  switch: { ...switch_(components) },
  select: { ...select(components) }
});

export default components;
