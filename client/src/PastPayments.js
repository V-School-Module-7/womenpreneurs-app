import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm.js'
require('dotenv').config();

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class PastPayments extends React.Component{
    render(){
        return (
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            </div>
        );
    }
};
export default PastPayments;