import { Colors, Mixins, Typography } from "./";
import merge from "deepmerge";

//Array of all theme variable to be merged into default theme.

const preTheme = [Colors, Mixins, Typography];

//Merge all objects into one.
const postTheme = merge.all(preTheme);

export default postTheme;
