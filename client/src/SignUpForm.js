import React, { useState } from "react";
import { withUser } from './context/UserProvider';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import SignUpFour from './SignUpFour';




const SignUpForm = (props) => {
 
  

    if (props.step === 0) {
      return <SignUpOne 
              handleLoginOrSignup={props.handleLoginOrSignup}
              handleChange={props.handleChange}
              email={props.email}
              password={props.password}
              {...props}
             />
    } else if (props.step === 1) {
      return <SignUpTwo 
              handleChange={props.handleChange}
              {...props}
             />
    } else if (props.step === 2) {
      return <SignUpThree 
              
              handleChange={props.handleChange}
              {...props}
             />
    } else if (props.step === 3) {
      return <SignUpFour
             
              handleSubmit={props.handleSubmit}
              handleChange={props.handleChange}
              {...props}
             />
    }
}


export default withUser(SignUpForm);