import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const TYPES = ["fixed", "fluid"];
const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];
const QUERIES = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const generateClasses = () => {
  const containers = {};
  BREAKPOINTS.forEach(breakpoint => {
    TYPES.forEach(type => {
      const key = `cont-${breakpoint}-${type}`;

      containers[key] = ({ theme }) => ({
        [`@media only screen and (min-width: ${QUERIES[breakpoint]}px)`]: {
          width:
            type === "fixed"
              ? `${theme.variables.layout.container.fixed.width}%`
              : `${theme.variables.layout.container.fluid.width}%`
        }
      });
    });
  });

  return containers;
};

const styles = {
  root: {
    "margin-right": "auto",
    "margin-left": "auto"
  },
  ...generateClasses()
};

const Container = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    lg = false,
    md = false,
    sm = false,
    xl = false,
    xs = false,
    ...other
  } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes[`cont-xs-${xs}`]]: xs !== false,
        [classes[`cont-sm-${sm}`]]: sm !== false,
        [classes[`cont-md-${md}`]]: md !== false,
        [classes[`cont-lg-${lg}`]]: lg !== false,
        [classes[`cont-xl-${xl}`]]: xl !== false
      })}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  );
});

Container.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  lg: PropTypes.oneOf(["fixed", "fluid"]),
  md: PropTypes.oneOf(["fixed", "fluid"]),
  sm: PropTypes.oneOf(["fixed", "fluid"]),
  xl: PropTypes.oneOf(["fixed", "fluid"]),
  xs: PropTypes.oneOf(["fixed", "fluid"])
};

export default withStyles(styles)(Container);
