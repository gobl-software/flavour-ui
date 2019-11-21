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
      ...createFont(2.6, 800, 1.2)
    },
    h2: {
      ...createFont(2.3, 800, 1.2)
    },
    h3: {
      ...createFont(2, 700, 1)
    },
    h4: {
      ...createFont(1.6, 700, 1)
    },
    h5: {
      ...createFont(1.3, 600, 1)
    },
    h6: {
      ...createFont(1, 600, 1)
    },
    p: {
      fontFamily: "Inter, sans-serif"
    },
    button: {
      fontFamily: "Inter, sans-serif",
      sm: {
        padding: "0.35rem 1.1rem",
        ...createFont(0.7, 600, 1.5)
      },
      md: {
        padding: "0.35rem 1.25rem",
        ...createFont(0.85, 600, 1.5)
      },
      lg: {
        padding: "0.35rem 1.55rem",
        ...createFont(1.3, 600, 1.5)
      },
      xlg: {
        padding: "0.35rem 1.85rem",
        ...createFont(1.6, 600, 1.5)
      }
    },
    /**
     * @param size font-size for font.
     * @param weight font-wight for font.
     * @param height line-height for font.
     */
    createFont: (size, weight, hight) => createFont
  }
};

export default typography;
