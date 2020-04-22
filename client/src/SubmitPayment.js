import React, {useMemo, useState} from 'react';
import { withRouter } from 'react-router-dom';
import {withUser} from './context/UserProvider';
import styled from 'styled-components';

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";


const useOptions = () => {
 
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize : "12px",
          
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
  );
  return options;
};

const PaymentStyles = styled.div` 
  margin:0 auto;

  .card{
    padding:24px;
    border:0.5px solid lightgrey;
    border-radius: 10px;
    background-color: white;
    margin-bottom:8px;
    box-shadow: 8px 8px grey;
  }
  .labels{
    font-family:'Open Sans', sans-serif;
    padding-bottom:8px;
    font-size: 24px;
    text-align: center;
    text-shadow: 2px 2px 5px #CDA373;
  }
  .card-form{
    width:400px;
  }
`

const Button = styled.button `
  background-color:#CDA373;
  font-family: 'Open Sans', sans-serif;
  color:white;
  border-radius: 10px;
  padding:16px;
  width: 100%;
  margin-top:8px ;
  font-size: 16px;
  box-shadow: 8px 8px grey;
`

const SubmitPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();


  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (

    <PaymentStyles>

    <form onSubmit={handleSubmit} className="card-form">
      <p className="labels">
        Payment Information
      </p>
        <CardNumberElement className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />   
        <CardExpiryElement className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
        
        <CardCvcElement className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
       
      <Button type="submit" disabled={!stripe} className="button">
        Confirm Payment
      </Button>
    </form>

    </PaymentStyles>
  );
};

export default withRouter(withUser(SubmitPayment));