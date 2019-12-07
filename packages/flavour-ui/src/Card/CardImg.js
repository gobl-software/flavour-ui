import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme, ...props }) => ({
    "object-fit": "cover",
    width: "100%",
    minHeight: "200px",
    minWidth: "200px"
  }),
  top: ({ theme, ...props }) => ({
    borderTopRightRadius: theme.variables.borders.radius,
    borderTopLeftRadius: theme.variables.borders.radius
  }),
  bottom: ({ theme, ...props }) => ({
    borderBottomRightRadius: theme.variables.borders.radius,
    borderBottomLeftRadius: theme.variables.borders.radius
  }),
  left: ({ theme, ...props }) => ({
    borderTopLeftRadius: theme.variables.borders.radius,
    borderBottomLeftRadius: theme.variables.borders.radius
  }),
  right: ({ theme, ...props }) => ({
    borderBottomRightRadius: theme.variables.borders.radius,
    borderTopRightRadius: theme.variables.borders.radius
  })
};

const CardImg = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    src,
    top = false,
    bottom = false,
    left = false,
    right = false,
    ...other
  } = props;

  return (
    <img
      className={clsx(classes.root, {
        [classes.top]: top,
        [classes.bottom]: bottom,
        [classes.left]: left,
        [classes.right]: right
      })}
      src={src}
      ref={ref}
      {...other}
    />
  );
});

CardImg.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool
};

export default withStyles(styles)(CardImg);
