import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React, {useState, useEffect} from 'react';
import SubmitPayment from './SubmitPayment.js';
import {StyledPage,Lady} from './Styles';
import {withRouter} from 'react-router-dom';
import {withUser} from './context/UserProvider';

require('dotenv').config();

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class PaymentForm extends React.Component{

    render(){
        return (
            <StyledPage> 
                <Elements stripe={stripePromise} className="stripe-element">
                    <SubmitPayment/>
                </Elements>
            </StyledPage>
        );
    }
};
export default withRouter(withUser(PaymentForm));