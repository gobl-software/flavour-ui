import { button } from "./components";

const components = (colors, mixins) => ({
  button: { ...button(colors, mixins) }
});

export default components;
