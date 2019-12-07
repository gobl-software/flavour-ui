import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";

const styles = {
  root: ({ theme, ...props }) => ({
    ...theme.components.card.root(props, theme)
  }),
  vertical: {
    flexDirection: "row !important"
  }
};

const Card = React.forwardRef((props, ref) => {
  const { children, classes, className, vertical = false, ...other } = props;

  return (
    <div
      className={clsx(
        classes.root,
        { [classes.vertical]: vertical },
        className
      )}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  );
});

Card.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  vertical: PropTypes.bool
};

export default withStyles(styles)(Card);
