import { button, card } from "./components";

const components = (colors, mixins, variables, components) => ({
  button: { ...button(colors, mixins, variables, components) },
  card: { ...card(colors, mixins, variables, components) }
});

export default components;
