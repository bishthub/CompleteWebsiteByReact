import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
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
    }).then(response => {
      alert("Payment successful")
    }).catch(error => {
      console.log("Payment error: ",(error));
      alert(
        "There was an issue with your payment. Please make sure you use the provided credentials of the credit Card."
      );
    }) 
  };

  return (
    <StripeCheckout
      label='Pay Now'
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

export default StripeCheckoutButton;
