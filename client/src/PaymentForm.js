import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React from 'react';
import SubmitPayment from './SubmitPayment.js';

require('dotenv').config();

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class PaymentForm extends React.Component{
    render(){
        return (
            <div>
                <Elements stripe={stripePromise}>
                    <SubmitPayment />
                </Elements>
            </div>
        );
    }
};
export default PaymentForm;