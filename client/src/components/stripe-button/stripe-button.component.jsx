import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {clearCart} from "../../redux/cart/cart.actions";


const StripeCheckoutButton = ({ price,clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_QN2oZM2xbiFjQOWWW1e0VujO00kGhX2NuV';



  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data:{
        amount:priceForStripe,
        token
      }
    }).then((response) => {
      alert("Payment successful, we will contact you ASAP.")
      clearCart();
 
    }).catch(error => {
      console.log("Payment error: ",(error));
      alert(
        "There was an issue with your payment. Please make sure you use the provided credentials of the credit Card."
      );
    }) 
  };

  return (
    <StripeCheckout
      label='Pay Later'
      name='Bishtji Services Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/LNK.svg'
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      currency ="INR"
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});



export default connect(null,mapDispatchToProps)(StripeCheckoutButton);
