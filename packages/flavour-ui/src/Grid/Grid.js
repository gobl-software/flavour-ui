import React from "react";
import PropTypes from "prop-types";
import withStyles from "../styles/withStyles";
import clsx from "clsx";
import _ from "lodash";

const styles = {
  root: {
    display: "inline-grid",
    width: "100%"
  },
  container: ({ theme, ...props }) => ({
    gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
    gridGap: `${props.spacing * 10}px` || `${props.spacing}px`,
    gridAutoRows: "minmax(100px, auto)"
  }),
  item: ({ theme, ...props }) => ({
    boxSizing: "border-box",
    margin: "0"
  })
};

const Grid = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    container = false,
    spacing = 1,
    ...other
  } = props;

  return (
    <div
      className={clsx(
        classes.root,
        { [classes.container]: container },
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
  spacing: PropTypes.number
};

export default withStyles(styles)(Grid);
