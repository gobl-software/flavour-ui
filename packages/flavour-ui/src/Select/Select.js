import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";
import { MdArrowDropDown } from "react-icons/md";
import Button from "../Button";

const styles = {
  root: ({ theme, ...props }) => ({})
};

const Select = React.forwardRef((props, ref) => {
  const { children, classes, className, ...other } = props;

  return (
    <Button endIcon={<MdArrowDropDown size={20} />} ref={ref} {...other}>
      {children}
    </Button>
  );
});

Select.propTypes = {
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
  value: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
  fullWidth: PropTypes.bool
};

export default withStyles(styles)(Select);
