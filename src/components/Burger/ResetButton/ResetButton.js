import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const ResetButton = props => {
  const total = () => {
    if (props.price == 4) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <Button
        disabled={total()}
        variant="contained"
        color="primary"
        type="button"
        onClick={props.click}
      >
        Reset Order
      </Button>
    </div>
  );
};

ResetButton.propTypes = {};

export default ResetButton;
