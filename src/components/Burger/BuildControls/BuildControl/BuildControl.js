import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './BuildControl.module.css';

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <Button
        onClick={props.removed}
        className={classes.Less}
        variant="contained"
        color="primary"
        disabled={props.disabled}
      >
        Less
      </Button>
      <Button
        onClick={props.added}
        className={classes.More}
        variant="contained"
        color="primary"
      >
        More
      </Button>
    </div>
  );
};

export default buildControl;
