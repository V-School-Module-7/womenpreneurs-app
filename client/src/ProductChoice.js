import React, {useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {withUser} from './context/UserProvider';
import {NextButton, PaymentOptions, CouponCode} from './Styles';
import fire from './Firebase';
import hands from './img/hand.png';
import shake from './img/handshake.png';
import bulb from './img/lightbulb.png';

const ProductChoice = (props) => {

    const [price,setPrice] = useState("");
    const [coupon,setCoupon] = useState("");
    const [yearly,setYearly] = useState(180);
    const [quarterly,setQuarterly] = useState(60);

    const data = {plan:'',coupon:''}
    const [info, setInfo] = useState(data)

    // const onSuggestSelect = (suggest) => {
    //     setData(...prevInputs => ({...prevInputs,
    //         plan:suggest.plan
    //     }))
    // }

    const setCouponFunction = (coupon) => {
        if (coupon === "free10"){
            setYearly(162)
            setQuarterly(54)

            setInfo(prevInputs => ({...prevInputs,
                coupon:coupon
            }))
        }
    }

    const setPriceFunction = (price) => {
        setPrice(price)
        setInfo(prevInputs => ({...prevInputs,
            plan:price
        }))
      
        // const createPaymentIntent = fire.functions().httpsCallable('createPaymentIntent')
        // createPaymentIntent(price);
        const createStripeSubscription = fire.functions().httpsCallable('createStripeSubscription')
        createStripeSubscription(info)
       // props.history.push(`/paymentform`)
    }

    const handleSubmit = async event => {
        event.preventDefault();
    };
        return (

            <PaymentOptions>
                <div className = "div-one">
                    <div className="div-one-text">
                        BECOMING GREAT ENTREPRENEURS
                    </div>
                    <div className="jost">
                        Top Traits of the Greats
                    </div>
                </div>

                <div className="div-two">
                    
                    <div className="div-two-grid-one">
                        <p className="roboto-sub">
                            HEART-DOMINANT PEOPLE
                        </p>
                    </div>

                    <div className="div-jost-two">
                        Infographics are visual representations of data, making 
                        complex info easier to share and digest. When making your own, 
                        simply organize your images, charts, and text. Finally, cite your 
                        sources.
                        </div>

                    <div className="div-two-grid-two">
                        <img src={hands} className="thumbs"/>
                    </div>
                </div>

                <div className="gap-one"></div>


                <div className="div-three">
                    <div className="div-three-div-one">
                        <img src={bulb} className="bulb"/>
                    </div>

                    <div className="div-three-div-two-title">
                        <p className="roboto-sub">
                            SMARTS-DOMINANT PEOPLE
                        </p>
                    </div>

                    <div className="div-three-div-two-sub">
                    Infographics are visual representations of data, making 
                        complex info easier to share and digest. When making your own, 
                        simply organize your images, charts, and text. Finally, cite your 
                        sources.
                    </div>
                    
                </div>

                <div className="gap-two"></div>
                

                <div className="div-four">
                    <div className="div-four-div-one">
                    <p className="roboto-sub">
                            GUTS-DOMINANT PEOPLE
                        </p>
                    </div>

                    <div className="div-four-snippet">
                        Infographics are visual representations of data, making 
                        complex info easier to share and digest. When making your own, 
                        simply organize your images, charts, and text. Finally, cite your 
                        sources.
                    </div>

                    <div className="div-four-div-two">
                        <img src ={shake}/>
                    </div>
                </div>

               
                <form onSubmit={handleSubmit}>

                <div className="card-input-row"> 
        
        </div>
                <CouponCode>
                    <input className="coupon" placeholder="Coupon Code" value = {coupon} onChange={e => setCoupon(e.target.value)}></input>
                    <NextButton onClick={e => setCouponFunction(coupon)}>Apply</NextButton>
                </CouponCode>

             <NextButton value = "quarterly" onClick={e => setPriceFunction(e.target.value)} 
                    >Quarterly ${quarterly}</NextButton> 
                <NextButton value = "yearly" onClick={e => setPriceFunction(e.target.value)}>Yearly ${yearly}</NextButton> 
                
                </form>
            </PaymentOptions>
         
        );
    
};


export default withRouter(withUser(ProductChoice));