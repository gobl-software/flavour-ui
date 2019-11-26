import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";
import _ from "lodash";

const SPACING = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10];
const GRID_SIZES = ["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];
const QUERIES = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const generateGrid = () => {
  const grid = {};
  BREAKPOINTS.forEach(breakpoint => {
    GRID_SIZES.forEach(size => {
      const key = `grid-${breakpoint}-${size}`;

      const width = `${Math.round((size / 12) * 10e7) / 10e5}%`;

      if (size === "auto") {
        grid[key] = {
          flexBasis: "auto",
          flexGrow: 0,
          maxWidth: "none"
        };
        return;
      }

      grid[key] = {
        [`@media only screen and (min-width: ${QUERIES[breakpoint]}px)`]: {
          flexBasis: width,
          flexGrow: 0,
          maxWidth: width
        }
      };
    });
  });

  return grid;
};

const generateSpacing = () => {
  const spacing = {};

  SPACING.forEach(space => {
    const key = `spacing-${space}`;

    spacing[key] = {
      width: `${100 - space}%`,
      margin: `-${space}%`,
      "& > $item:not(last-child)": {
        padding: `${space}%`
      }
    };
  });

  return spacing;
};

const styles = {
  root: {},
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  item: {
    boxSizing: "border-box",
    margin: "0"
  },
  ...generateGrid(),
  ...generateSpacing()
};

const Grid = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    container = false,
    item = false,
    lg = false,
    md = false,
    sm = false,
    xl = false,
    xs = false,
    spacing = 0,
    ...other
  } = props;

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.container]: container,
          [classes.item]: item,
          [classes[`spacing-${spacing}`]]: spacing !== false,
          [classes[`grid-xs-${xs}`]]: xs !== false,
          [classes[`grid-sm-${sm}`]]: sm !== false,
          [classes[`grid-md-${md}`]]: md !== false,
          [classes[`grid-lg-${lg}`]]: lg !== false,
          [classes[`grid-xl-${xl}`]]: xl !== false
        },
        className
      )}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  );
});

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  container: PropTypes.bool,
  item: PropTypes.bool,
  spacing: PropTypes.number,
  lg: PropTypes.oneOf(["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf(["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf(["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf(["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xs: PropTypes.oneOf(["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

export default withStyles(styles)(Grid);
