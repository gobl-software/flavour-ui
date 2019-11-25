import { colors, mixins, fonts, variables } from ".";
import createTypography from "./createTypography";
import createComponents from "./createComponents";
import merge from "deepmerge";

let typography = createTypography(fonts.main),
  components = createComponents(colors, mixins);

//Merge all objects into one.
const defaultTheme = merge.all([
  {
    colors,
    mixins,
    typography,
    components,
    variables
  }
]);

export default defaultTheme;
