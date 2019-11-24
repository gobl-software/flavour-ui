import { button } from "./components";

const components = (colors, mixins, components) => ({
  button: { ...button(colors, mixins, components) }
});

export default components;
