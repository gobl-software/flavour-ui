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

  let mergedColors = merge.all([defaultTheme.colors, colors]),
    mergedMixins = merge.all([defaultTheme.mixins, mixins]),
    mergedVariables = merge.all([defaultTheme.variables, variables]);

  let flavourTheme = {
    typography: {
      ...merge.all([createTypography(typography.font), { ...typography }])
    },
    components: {
      ...createComponents(
        mergedColors,
        mergedMixins,
        mergedVariables,
        components
      )
    },
    variables,
    colors,
    ...other
  };

  return merge.all([defaultTheme, flavourTheme]);
};
