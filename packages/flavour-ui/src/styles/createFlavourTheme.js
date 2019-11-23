import merge from "deepmerge";
import defaultTheme from "./createDefaultTheme";
import createTypography from "./createTypography";
import createComponents from "./createComponents";

export const createFlavourTheme = theme => {
  const { typography, components, colors = {}, mixins = {}, ...other } = theme;

  let mergedColors = merge.all([defaultTheme.colors, colors]),
    mergedMixins = merge.all([defaultTheme.mixins, mixins]);

  let flavourTheme = {
    typography: {
      ...merge.all([createTypography(typography.font), { ...typography }])
    },
    components: {
      ...merge.all([
        createComponents(mergedColors, mergedMixins),
        { ...components }
      ])
    },
    colors,
    ...other
  };

  return merge.all([defaultTheme, flavourTheme]);
};
