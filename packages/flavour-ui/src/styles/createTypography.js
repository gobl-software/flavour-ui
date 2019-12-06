const createFont = (size, weight, height, font) => {
  return {
    fontFamily: font,
    "line-height": height,
    "font-size": `${size}rem`,
    "font-weight": weight
  };
};

const typography = font => ({
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
      ...createFont(0.65, 500, 1.5, font)
    },
    md: {
      ...createFont(0.875, 500, 1.5, font)
    },
    lg: {
      ...createFont(1.32, 500, 1.5, font)
    },
    xlg: {
      ...createFont(1.62, 500, 1.5, font)
    }
  },
  checkbox: {
    fontFamily: font
  },
  /**
   * @param size font-size for font.
   * @param weight font-wight for font.
   * @param height line-height for font.
   */
  createFont: (size, weight, hight) => createFont
});

export default typography;
