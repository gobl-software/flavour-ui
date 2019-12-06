import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";
import { Typography } from "../";

const styles = {
  root: ({ theme, ...props }) => ({
    marginTop: "0.7rem !important"
  })
};

const CardTitle = React.forwardRef((props, ref) => {
  const { children, classes, className, ...other } = props;

  return (
    <Typography
      variant="h4"
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </Typography>
  );
});

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(CardTitle);
