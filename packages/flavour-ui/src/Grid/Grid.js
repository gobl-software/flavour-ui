import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme, ...props }) => ({})
};

const Grid = React.forwardRef((props, ref) => {
  const { children, classes, className, ...other } = props;

  return (
    <div className={clsx(classes.root, className)} ref={ref} {...other}>
      <span>{children}</span>
    </div>
  );
});

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(Grid);
