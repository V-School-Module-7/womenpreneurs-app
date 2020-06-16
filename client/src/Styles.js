import styled from 'styled-components';

export const StyledPage = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:100%;
    margin:0 auto;
    padding-bottom:24px;
    border-radius: 4px;

   .card-background{
        width:500px;
        height:500px;
        display:flex;
        margin: 0 auto;
        padding: 10px;
        border-style: none;
        will-change: opacity, transform;
        box-shadow: 0 6px 9px , 0 2px 5px rgba(0, 0, 0, 0),
        inset 0 1px 0;
        border-radius: 4px;
   }

    @media only screen and (max-width:1110px){
        width:500px;
        display:flex;
    }

    .stripe-element{
        display:flex;
        position:absolute;
        flex-wrap:wrap;
        margin: 0 auto;
        width:500px;
        height:500px;
        left:50%;
        top:50%;      
    }

    .card-input-row{
        height:90px;
    }

`

export const SubmitPaymentStyles=styled.fieldset`
    width:500px;
    display:flex;
    margin: 0 auto;
    border: 1px solid;
    padding: 30px;
    box-shadow: 5px 10px #4E4653;
    will-change: opacity, transform;
    inset 0 1px 0;
    border-radius: 4px;

    .PhoneInputCountrySelect{
        display:none;
    }
    .PhoneInputInput{
        border:0;
        width:100%;
        outline: none;
        font-size:20px;
      
    }
    .PhoneInputCountryIconImg{
        display:flex;
        height:26px;
        padding-right:10px;
    }

    .phone-input{
        display:flex;
        border:none;
        height:36px;
        border:0;
        padding-top:10px;
    }
    .card-input-row{
        width: 100%;
        height: 56px;
        position: relative;
        background-color: rgba(255,255,255,0.3);
        transition: 0.3s all;
        border-bottom: 1px solid #4E4653;
        border-bottom-style: inset;
    }

    .card-input-row input{
        width: 100%;
        height: 56px;
        position: relative;
      
        border: none;
        border-radius: 4px;
        font-family:Source Code Pro, monospace;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        background-color: transparent;
        color:"#424770";
        outline: none;
        box-shadow: 0px 4px 20px 0px transparent;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
        -webkit-appearance: none;
    }
    .card-input-row placeholder{
        color:"#aab7c4";
    }

`

export const CouponCode = styled.div`
    display:flex;
    font-family:Source Code Pro, monospace;
    font-size:20px;
    color:white;
    border-radius:8px;
    width:100%;
    height:100px;
    margin-top:8px ;
    font-size: 26px;
    font-family: 'Jost', sans-serif;
    height:110px;

    .coupon{
        margin-top:8px ;
        border-radius:8px;
        height:100px;
        width:70%;
        font-size:30px;
    }
`


export const Lady = styled.img`
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

export const SuccessPage = styled.div`
    display:flex;
    width: 100%;
    .success{
        height: auto;
        margin: 0 auto;
        padding: 10px;
        position: relative;
    }
    .success-text{
        height: auto;
        margin: 0 auto;
        padding: 10px;
        position: relative;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        text-align:center;
    }

`
export const PayButton = styled.button `
    background-color:#687D89;
    font-family:Source Code Pro, monospace;
    font-size:20px;
    color:white;
    border-radius:8px;
    padding:16px;
    width: 100%;
    margin-top:8px ;
    font-size: 16px;
    box-shadow: 3px 3px #8B7071;
`

export const ApplyButton = styled.button `
    background-color:#D58346;
    font-family:Source Code Pro, monospace;
    font-size:20px;
    color:white;
    border-radius:8px;
    padding:16px;
    width: 100%;
    margin-top:8px ;
    font-size: 16px;
    box-shadow: 3px 3px #8B7071;
`

export const ChoiceBox = styled.div `
    font-family:Source Code Pro, monospace;
    font-size:20px;
    color:black;
    width: 100%;
    margin-top:8px ;
    font-size: 16px;
    text-align:center;
`


export const NextButton = styled.button `
   
    background-color:#D58346;
    font-family:Source Code Pro, monospace;
    font-size:20px;
    color:white;
    border-radius:8px;
    padding:16px;
    width: 50%;
    height: 100px;
    margin-top:8px;
    font-size: 26px;
    box-shadow: 3px 3px #8B7071;
    font-family: 'Jost', sans-serif;
`
export const ChoiceButton = styled.div `
    display:flex;
    flex-wrap:wrap;
    background-color:#D58346;
    font-family:Source Code Pro, monospace;
    font-size:20px;
    color:white;
    border-radius:8px;
    padding:16px;
    width: 40%;
    height: 100px;
    margin-top:8px;
    font-size: 26px;
    box-shadow: 3px 3px #8B7071;
    font-family: 'Jost', sans-serif;
`


export const PaymentOptions = styled.div`
    display:grid;
    grid-template-columns: 100%;
    grid-template-rows: 560px 500px 20px 500px 20px 500px 200px;
    justify-content:center;
    margin: 0 auto;
    width:100%;
    height:100%;


    .gap-one{
        background-color:#687D89;
        display:grid;
        grid-template-row:3;
        height:20px;
    }

    .gap-two{
        background-color:#687D89;
        display:grid;
        grid-template-row:5;
        height:20px;
    }

    .gap-three{
        background-color:#687D89;
        display:grid;
        grid-template-row:7;
        height:20px;
    }

    .div-one{
        display:grid;
        grid-template-rows: 200px 100px;
        grid-template-columns: auto;
        background-color:#687D89;
        grid-row-start:1;
        color:white;
        padding-left:260px;
        padding-bottom:0px;
    }

    .div-one-text{
        font-family: 'Roboto', sans-serif;
        color:white;
        font-size: 114px;
        grid-row-start:1;
        padding-top:90px;
       
    }

    .thumbs{
        width:540px;
        height:500px;
    }

    .jost{
        font-family: 'Jost', sans-serif;
        font-size:38px;
        margin-top:180px;
        grid-row-start:2;
    }

    .roboto{
        font-family: 'Roboto', sans-serif;
        color:white;
        font-size: 84px;
    }

    .roboto-sub{
        font-family: 'Roboto', sans-serif;
        color:white;
        font-size: 64px;
    }

    .div-two{
        grid-template-columns: auto 500px 400px auto;
        grid-template-rows: 200px 100px;
        font-family: 'Jost', sans-serif;
        display:grid;
        grid-row-start:2;
        color:white;
        background-color:#81A9AA;
        padding-left:80px;
    }

    .div-jost-two{
        font-family: 'Jost', sans-serif;
        display:grid;
        grid-column-start:2;
        grid-column-end:4;
        grid-row-start:2;
        font-size:38px;
        margin-top:0px;
    }

    .roboto-sub-heart{
        display:grid;
        font-family: 'Roboto', sans-serif;
        color:white;
        font-size: 64px;
        
    }

    .div-two-grid-one{
        display:grid;
        grid-column-start:2;
        grid-column-end:4;
        color:white;
        
    }
    .div-two-grid-two{
        display:grid;
        grid-column-start:4;
    }

    .bulb{
        width:550px;
        height:500px;
       
    }

    .div-three{
        background-color:#B6CFD4;
        color:white;
        display:grid;
        grid-template-columns: auto 400px 550px 70px auto;
        grid-template-rows: 200px 100px;
        grid-row-start:4;
    }

    .div-three-div-one{
        display:grid;
        grid-column-start:1;
        grid-column-end:2;
        grid-row-start:1;
        grid-row-end:2;
        padding-left:70px;
       
    }

    .div-three-div-two-title{
        display:grid;
        grid-column-start:2;
        grid-column-end:4;
        grid-row-start:1;
        color:white;
        font-size:31px;
    }
    .div-three-div-two-sub{
        font-family: 'Jost', sans-serif;
        display:grid;
        grid-column-start:2;
        grid-column-end:4;
        grid-row-start:2;
        color:white;
        font-size:38px;
    }

    .div-four{
        background-color:#81A9AA;
        display:grid;
        grid-template-columns: auto 850px 400px auto;
        grid-template-rows: 200px 100px;
        grid-row-start:6;
        color:white;
    }

    .div-four-div-one{
        display:grid;
        grid-column-start:2;
        grid-column-end:3;
        grid-row-start:1;
        font-family: 'Roboto', sans-serif;
        color:white;
        font-size: 64px;
        
        padding-top:50px;
    }

    .div-four-snippet{
        grid-column-start:2;
        grid-column-end:3;
        grid-row-start:2;
    
        font-family: 'Jost', sans-serif;
        font-size:38px;
    }

    .div-four-div-two{
        display:grid;
        grid-column-start:3;

    }

    .test{
        display:flex;
        height:2000px;
        width:800px;
    }

    .radio-styles{
        display:grid;
        grid-template-columns: 355px 355px;
        grid-template-rows: auto;
        justify-content:center;
        gap: 25px 20px;
    }
    .choice-text{
        padding:18px;
    }

    .payment-choice-one{
        text-align: justify;
        border-radius:18px;
        display:grid;
        grid-column:1;
        border: 1px solid #8B7071;
        box-shadow: 5px 5px #8B7071;
        font-family:Source Code Pro, monospace;
        width:350px;
        height:500px;
    }

    .payment-choice-two{
        text-align: justify;
        border-radius:18px;
        display:grid;
        grid-column:2;
        border: 1px solid #8B7071;
        box-shadow: 5px 5px #8B7071;
        font-family:Source Code Pro, monospace;
        width:350px;
        height:500px;
    }

    .center-radio{
        display: flex;
        align-items: center;
        padding-left: 40px;
    }

`

