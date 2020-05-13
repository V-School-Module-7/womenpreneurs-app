import React, {useMemo, useState, useEffect} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {withUser} from './context/UserProvider';
import {PayButton, PaymentStyles, Lady, SuccessPage, SubmitPaymentStyles} from './Styles';
import {Checkmark} from 'react-checkmark';
import fire from './Firebase';
import PhoneInput from 'react-phone-number-input';
import yay from './img/yay.png';
 
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          padding:"100px",
          fontSize : "18px", 
          lineHeight:3,  
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily:"Source Code Pro, monospace" ,
          "::placeholder": {
            color: "#aab7c4"
          },
  
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
  );
  return options;
};

const SubmitPayment = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [success, setSuccess] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [phone, setPhone] = useState(null);
  const attachPaymentSource =  fire.functions().httpsCallable('attachPaymentSource');

  const startSubscription= (coupon) => {
    setCoupon(coupon)
    const createDiscount = fire.functions().httpsCallable('createDiscount')
    createDiscount(coupon)
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    //const createStripeSubscription = fire.functions().httpsCallable('createStripeSubscription')
    
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    attachPaymentSource(payload.paymentMethod.id);

    payload ? setSuccess(true) : setSuccess(false);
    console.log("[PaymentMethod]", payload.paymentMethod.id)
  };


  return success ? (
    <SuccessPage>
      <div className="success">
        <Checkmark size='xxLarge'/>
        <div className="success-text">Payment successful!</div>
        <img src={yay}/>
      </div>
      
    </SuccessPage>
  ) : (
  
    
      <SubmitPaymentStyles >
        <form onSubmit={handleSubmit}>
        <div className="card-input-row"> 
            <input type="text" placeholder="Name"></input>
        </div>
        <div className="card-input-row"> 
            <input type="text" placeholder="Email"></input>
        </div>
            <PhoneInput country={"us"} defaultCountry="US" placeholder="208-347-7262" value="phone" className="phone-input" onChange={() => setPhone("test")}
            />
         
        <CardElement options={options}/>
          <PayButton type="submit" disabled={!stripe} className="button">
            Submit 
          </PayButton>
        </form>
      {/* <Lady src={LadyImg}></Lady> */}
      </SubmitPaymentStyles>
  
  );
};

export default withRouter(withUser(SubmitPayment));