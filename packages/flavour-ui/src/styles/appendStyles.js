const appendStyles = (options = {}) => {
  let { component, components, style, props, theme } = options;

  if (components && components[component]) {
    if (typeof components[component][style] === "function") {
      return components[component][style]
        ? components[component][style](props, theme)
        : () => {};
    } else {
      return components[component][style];
    }
  }
};

export default appendStyles;
