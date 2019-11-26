import merge from "deepmerge";
import defaultTheme from "./createDefaultTheme";
import createTypography from "./createTypography";
import createComponents from "./createComponents";

export const createFlavourTheme = theme => {
  const {
    typography = { font: "Inter, sans-serif" },
    components,
    colors = {},
    mixins = {},
    variables = {},
    ...other
  } = theme;

  let flavourTheme = {
    typography: {
      ...merge.all([createTypography(typography.font), { ...typography }])
    },
    components: {
      ...createComponents(components)
    },
    variables,
    colors,
    ...other
  };

  return merge.all([defaultTheme, flavourTheme]);
};
