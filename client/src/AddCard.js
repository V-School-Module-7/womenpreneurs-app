import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm.js'
import { withRouter } from 'react-router-dom';
import {withUser} from './context/UserProvider';
require('dotenv').config();

const stripePromise = loadStripe("pk_test_wsLcr2VwAVtzK2j7CaSLMjR0");

class AddCard extends React.Component{
    render(){
        return (
            <div>
            {this.props.uid ? 
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
                : ""
            }
            </div>
        );
    }
};
export default withRouter(withUser(AddCard));