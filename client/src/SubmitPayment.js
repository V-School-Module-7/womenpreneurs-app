import React, {useMemo, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {withUser} from './context/UserProvider';
import {PayButton, ChoiceBox, SuccessPage,ApplyButton,SubmitPaymentStyles,NextButton, CouponCode} from './Styles';
import {Checkmark} from 'react-checkmark';
import fire from './Firebase';
import PhoneInput from 'react-phone-number-input';
import yay from './img/yay.png';
 
import {
  useStripe,
  useElements,
  CardElement
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
  const [plan,sayPlan] = useState('');
  const [payment,sayPaymentAdded] = useState('');

  const attachPaymentSource =  fire.functions().httpsCallable('attachPaymentSource');
  const createStripeSubscription = fire.functions().httpsCallable('createStripeSubscription');

  const data = {plan:'',coupon:'',paymentInfo:''}
  const [info, setInfo] = useState(data)


  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    try{
      createStripeSubscription(info)
      return setSuccess(true)
    } catch (error) {
      console.log(error)
    } 

  }

  const [coupon,setCoupon] = useState("")

  const setValueFunction = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement)
    
    
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    })

    attachPaymentSource(payload.paymentMethod.id)

    setInfo(prevInputs => ({...prevInputs,
      paymentInfo:payload.paymentMethod.id
    }))

    sayPaymentAdded('Payment Added')
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
      sayPlan(price + ' added')
  }

  const setCouponFunction = (coupon) => {
    if (coupon === "free10"){
      
        setYearly(162)
        setQuarterly(54)

        setInfo(prevInputs => ({...prevInputs,
            coupon:coupon
        }))
    }
    console.log(props)
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

          <ApplyButton onClick={setValueFunction} className="button">
            Apply 
          </ApplyButton> 

        <form onSubmit={handleSubmit}>
        <PayButton type="submit" disabled={!stripe} className="button">
            Submit 
          </PayButton>
        </form>

      <ChoiceBox>
        {plan} 
        <br/>
        {payment}
      </ChoiceBox>
      </SubmitPaymentStyles>
  
  )
};

export default withRouter(withUser(SubmitPayment));