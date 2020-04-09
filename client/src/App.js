import React from 'react';
import PaymentForm from './PaymentForm.js'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('ppk_test_wsLcr2VwAVtzK2j7CaSLMjR0');

const App = () => {
  return (
    <div className="App">
        Womanpreneurs

      <Elements stripe={stripePromise}>
        <PaymentForm/>
      </Elements>
    </div>
  );
}
export default App;
