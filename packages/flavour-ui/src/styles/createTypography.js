const createFont = (size, weight, height, font) => {
  return {
    fontFamily: font,
    "line-height": height,
    "font-size": `${size}rem`,
    "font-weight": weight
  };
};

const typography = font => ({
  typography: {
    h1: {
      ...createFont(2.6, 800, 1.2, font)
    },
    h2: {
      ...createFont(2.3, 800, 1.2, font)
    },
    h3: {
      ...createFont(2, 700, 1, font)
    },
    h4: {
      ...createFont(1.6, 700, 1, font)
    },
    h5: {
      ...createFont(1.3, 600, 1, font)
    },
    h6: {
      ...createFont(1, 600, 1, font)
    },
    p: {
      fontFamily: font
    },
    button: {
      fontFamily: font,
      sm: {
        padding: "0.35rem 1.1rem",
        ...createFont(0.7, 600, 1.5, font)
      },
      md: {
        padding: "0.35rem 1.25rem",
        ...createFont(0.85, 600, 1.5, font)
      },
      lg: {
        padding: "0.35rem 1.55rem",
        ...createFont(1.3, 600, 1.5, font)
      },
      xlg: {
        padding: "0.35rem 1.85rem",
        ...createFont(1.6, 600, 1.5, font)
      }
    },
    /**
     * @param size font-size for font.
     * @param weight font-wight for font.
     * @param height line-height for font.
     */
    createFont: (size, weight, hight) => createFont
  }
});

export default typography;