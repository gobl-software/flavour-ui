import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme, ...props }) => ({
    padding: "1rem"
  })
};

const CardBody = React.forwardRef((props, ref) => {
  const { children, classes, className, ...other } = props;

  return (
    <div className={clsx(classes.root)} ref={ref} {...other}>
      {children}
    </div>
  );
});

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(CardBody);
