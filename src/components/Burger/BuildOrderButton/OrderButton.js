import React from 'react';
import OrderModal from './OrderModal';

function OrderButton(props) {
  return (
    <div>
      <OrderModal state={props.state} price={props.totalPrice}></OrderModal>
    </div>
  );
}

export default OrderButton;
