import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import uuid from 'react-uuid';
import axios from '../../../axios-orders';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const [responsed, setResponsed] = React.useState(false);

  const mapIngredients = () => {
    let array = [];
    for (const [key, value] of Object.entries(props.state)) {
      // eslint-disable-next-line no-lone-blocks
      {
        array.push(
          <li key={uuid()}>
            {key} : {value} pieces
          </li>
        );
      }
    }
    return array;
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        onClick={handleOpen}
      >
        Order
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Order Summary</h2>
            <p id="transition-modal-description">
              <b>
                Total Price: <strong>{props.price}</strong>
              </b>
            </p>
            <p id="transition-modal-description">
              Ingredients: {mapIngredients()}
            </p>
            <Button
              onClick={() => {
                const data = {
                  price: props.price,
                };
                axios
                  .post('/posts.json', data)
                  .then(response => {
                    console.log({ responsed });

                    setResponsed(true);
                    
                    console.log({ responsed });

                    console.log(response);
                  })
                  .catch(error => console.log(error));
              }}
              variant="contained"
              color="primary"
              type="button"
            >
              Continue
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="secondary"
              type="button"
            >
              Cancel
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
