import { button, card } from "./components";

const components = components => ({
  button: { ...button(components) },
  card: { ...card(components) }
});

export default components;
