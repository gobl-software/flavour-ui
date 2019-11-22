import merge from "deepmerge";
import defaultTheme from "./defaultTheme";
import createTypography from "./createTypography";

const createFlavourTheme = theme => {
  const { typography = { font: "Inter, sans-serif" }, ...other } = theme;

  let flavourTheme = {
    ...merge.all([createTypography(typography.font), { typography }]),
    ...other
  };

  return merge.all([defaultTheme, flavourTheme]);
};

export default createFlavourTheme;
