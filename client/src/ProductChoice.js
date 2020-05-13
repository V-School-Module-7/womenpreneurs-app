import React, {useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {withUser} from './context/UserProvider';
import {NextButton, PaymentOptions} from './Styles';
import {RadioGroup, Radio} from 'react-radio-group';
import fire from './Firebase';
import hands from './img/hand.png';
import shake from './img/handshake.png';
import bulb from './img/lightbulb.png';



const ProductChoice = (props) => {

    const [price,setPrice] = useState("");

    const setPriceFunction = (price) => {
        console.log(price);
        setPrice(price)
        const createPaymentIntent= fire.functions().httpsCallable('createPaymentIntent')
        createPaymentIntent(price);
        props.history.push(`/paymentform`)
        
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

                <NextButton value = "$60" onClick={e => setPriceFunction(e.target.value)} 
                             >Quarterly $60</NextButton> 
                <NextButton value = "$180" onClick={e => setPriceFunction(e.target.value)}>Yearly $180 (Save 33%)</NextButton>
                </form>
            </PaymentOptions>
         
        );
    
};
export default withRouter(withUser(ProductChoice));