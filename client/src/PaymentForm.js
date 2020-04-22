import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React from 'react';
import SubmitPayment from './SubmitPayment.js';
import styled from 'styled-components';
import LadyImg from './img/Lady.png'


require('dotenv').config();

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const StyledPage = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:1104px;
    height:100%;
    margin:auto;
    background-color:#F5F5F5;
    padding-bottom:24px;

    @media only screen and (max-width:1110px){
        width:500px;
        background-color:#F5F5F5;
        display:flex;
    }
`

const Lady = styled.img`
    display:flex;
    height:350px;
    width:400px;
    margin:auto;
    padding-top:24px;
    padding-bottom:24px;

    @media only screen and (max-width:1110px){
        display:flex;
    }
`

class PaymentForm extends React.Component{
    render(){
        return (
            <StyledPage>
                <Elements stripe={stripePromise} className="stripe-element">
                    <SubmitPayment />
                </Elements>
                <Lady src={LadyImg}></Lady>
            </StyledPage>
        );
    }
};
export default PaymentForm;