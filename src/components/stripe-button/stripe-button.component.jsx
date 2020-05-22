import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_QN2oZM2xbiFjQOWWW1e0VujO00kGhX2NuV';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Bishtji Services Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
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
