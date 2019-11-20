const createFont = (size, weight, height) => {
  return {
    fontFamily: "Inter, sans-serif",
    "line-height": height,
    "font-size": `${size}rem`,
    "font-weight": weight
  };
};

const typography = {
  typography: {
    h1: {
      ...createFont(2.5, 800, 1.2)
    },
    h2: {
      ...createFont(2.2, 800, 1.2)
    },
    h3: {
      ...createFont(1.95, 700, 1.2)
    },
    h4: {
      ...createFont(1.6, 700, 1.2)
    },
    h5: {
      ...createFont(1.25, 600, 1.2)
    },
    h6: {
      ...createFont(1, 600, 1.2)
    },
    button: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "500",
      fontSize: "0.85rem"
    }
  }
};

export default typography;
