import React, {useMemo, useState, useEffect} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {withUser} from './context/UserProvider';
import {PayButton, PaymentStyles, Lady, SuccessPage, SubmitPaymentStyles,NextButton, PaymentOptions, CouponCode} from './Styles';
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
  const [phone, setPhone] = useState(null);
  const [yearly,setYearly] = useState(180);
  const [quarterly,setQuarterly] = useState(60);

  const attachPaymentSource =  fire.functions().httpsCallable('attachPaymentSource');
  const createStripeSubscription = fire.functions().httpsCallable('createStripeSubscription')
  const createPaymentIntent = fire.functions().httpsCallable('createPaymentIntent')


  const data = {plan:'',coupon:'',paymentInfo:''}
  const [info, setInfo] = useState(data)


  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    createStripeSubscription(info)
    props.history.push(`/productchoice`);
   // console.log("[PaymentMethod]", payload.paymentMethod.id);

  }

  const [coupon,setCoupon] = useState("")

  const setValueFunction = async event => {
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    setInfo(prevInputs => ({...prevInputs,
      paymentInfo:payload.paymentMethod.id
    }))

  }

  const setPriceFunction = (price) => {

    if (price === "quarterly"){
      setInfo(prevInputs => ({...prevInputs,
          plan:"quarterly"
      }))
    }else 
      setInfo(prevInputs => ({...prevInputs,
        plan:"yearly"
      }))

    console.log(data)
   //createPaymentIntent(price)
   
   // props.history.push(`/paymentform`) 
  }

  const setCouponFunction = (coupon) => {
    if (coupon === "free10"){
        setYearly(162)
        setQuarterly(54)

        setInfo(prevInputs => ({...prevInputs,
            coupon:coupon
        }))
    }
    console.log('')
  }


  return success ? (
    <SuccessPage>
      <div className="success">
        <Checkmark size='xxLarge'/>
        <div className="success-text">Payment Added</div>
        <img src={yay}/>
      </div>
      
    </SuccessPage>
  ) : (
      <SubmitPaymentStyles>
       <div>
        <CouponCode>
          <input className="coupon" placeholder="Coupon Code" value = {coupon} onChange={e => setCoupon(e.target.value)}></input>
          <NextButton onClick={e => setCouponFunction(coupon)}>Apply</NextButton>
        </CouponCode>

        <NextButton value = "quarterly" onClick={e => setPriceFunction(e.target.value)} 
          >Quarterly ${quarterly}</NextButton> 
        <NextButton value = "yearly" onClick={e => setPriceFunction(e.target.value)}>Yearly ${yearly}</NextButton> 
       
       </div>
        
        <div className="card-input-row"> 
            <input type="text" placeholder="Name"></input>
        </div>
        <div className="card-input-row"> 
            <input type="text" placeholder="Email"></input>
        </div>
          <PhoneInput country={"us"} defaultCountry="US" placeholder="XXX-XXX-XXXX" value="phone" className="phone-input" onChange={() => setPhone("test")}/>
          <CardElement options={options}/>

          <NextButton onClick={e => setValueFunction(e.target.value)} className="button">
            Apply 
          </NextButton>

       
      
        <form onSubmit={handleSubmit}>
        <PayButton type="submit" disabled={!stripe} className="button">
            Submit 
          </PayButton>
        </form>
      {/* <Lady src={LadyImg}></Lady> */}
      </SubmitPaymentStyles>
  
  )
};

export default withRouter(withUser(SubmitPayment));