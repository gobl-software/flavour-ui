import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme, ...props }) => ({
    "object-fit": "cover",
    width: "100%",
    marginBottom: "-4px"
  }),
  top: ({ theme, ...props }) => ({
    borderTopRightRadius: theme.variables.borders.radius,
    borderTopLeftRadius: theme.variables.borders.radius
  }),
  bottom: ({ theme, ...props }) => ({
    borderBottomRightRadius: theme.variables.borders.radius,
    borderBottomLeftRadius: theme.variables.borders.radius
  })
};

const CardImg = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    source,
    top = false,
    bottom = false,
    ...other
  } = props;

  return (
    <img
      className={clsx(classes.root, {
        [classes.top]: bottom && top === false ? false : true,
        [classes.bottom]: bottom
      })}
      src={source}
      ref={ref}
      {...other}
    />
  );
});

CardImg.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

export default withStyles(styles)(CardImg);
