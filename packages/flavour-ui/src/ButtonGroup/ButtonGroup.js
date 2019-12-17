import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    display: "inline-flex",
    verticalAlign: "middle",
    justifyContent: "center",
    alignItems: "center"
  },
  grouped: ({ theme, ...props }) => ({
    "&:not(:first-child)": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeftWidth: `${
        props.outlined === true
          ? theme.variables.borders.width > 1
            ? theme.variables.borders.width / 2
            : 0
          : theme.variables.borders.width / 2
      }px`
    },
    "&:not(:last-child)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      marginRight: 0,
      borderRightWidth: `${
        props.outlined === true
          ? theme.variables.borders.width > 1
            ? theme.variables.borders.width / 2
            : 0
          : theme.variables.borders.width / 2
      }px`
    }
  }),
  block: {
    width: "100%"
  }
};

const ButtonGroup = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    color,
    size = "md",
    outlined = false,
    block = false,
    ...other
  } = props;

  return (
    <span
      className={clsx(classes.root, { [classes.block]: block }, className)}
      ref={ref}
      {...other}
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          className: clsx(classes.grouped, child.props.className),
          color: child.props.color || color,
          block: child.props.block || block,
          size: child.props.size || size,
          outlined: child.props.outlined || outlined
        });
      })}
    </span>
  );
});

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["normal", "outlined"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
  fullWidth: PropTypes.bool,
  grouped: PropTypes.bool
};

export default withStyles(styles)(ButtonGroup);
