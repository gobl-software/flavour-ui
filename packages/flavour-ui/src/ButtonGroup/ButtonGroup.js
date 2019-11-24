import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: {
    display: "inline-flex"
  },
  grouped: {
    "&:not(:first-child)": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeftWidth: "1px"
    },
    "&:not(:last-child)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      marginRight: 0,
      borderRightWidth: "1px"
    }
  },
  fullWidth: {
    width: "100%"
  }
};

const ButtonGroup = React.forwardRef((props, ref) => {
  const { children, classes, className, fullWidth = false, ...other } = props;

  return (
    <div
      className={clsx(
        classes.root,
        { [classes.fullWidth]: fullWidth },
        className
      )}
      ref={ref}
      {...other}
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          className: clsx(classes.grouped, child.props.className),
          grouped: child.props.grouped || true,
          fullWidth
        });
      })}
    </div>
  );
});

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default withStyles(styles)(ButtonGroup);
