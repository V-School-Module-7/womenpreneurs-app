import React, { useState } from "react";
import { withUser } from './context/UserProvider';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import SignUpFour from './SignUpFour';
import SignUpFive from './SignUpFive';




const SignUpForm = (props) => {

  let [step, setStep] = useState(0);
 
 const nextStep = () => {
    setStep(step + 1)
 }

 const previousStep = () => {
  setStep(step - 1);
 }

    if (step === 0) {
      return <SignUpOne 
              nextStep={nextStep}
              handleLoginOrSignup={props.handleLoginOrSignup}
              handleChange={props.handleChange}
              email={props.email}
              password={props.password}
              formData={props.formData}
              {...props}
             />
    } else if (step === 1) {
      return <SignUpTwo 
              nextStep={nextStep}
              previousStep={previousStep}
              handleChange={props.handleChange}
              formData={props.formData}
              {...props}
             />
    } else if (step === 2) {
      return <SignUpThree 
              nextStep={nextStep}
              previousStep={previousStep}
              handleChange={props.handleChange}
              formData={props.formData}
              addPhoto={props.addPhoto}
              profileImage={props.profileImage}
              {...props}
             />
    } else if (step === 3) {
      return <SignUpFour
              previousStep={previousStep}
              nextStep={nextStep}
              handleSubmit={props.handleSubmit}
              handleChange={props.handleChange}
              formData={props.formData}
              profileImage={props.profileImage}
              {...props}
             />
    } else if (step === 4) {
      return <SignUpFive
              previousStep={previousStep}
              handleSubmit={props.handleSubmit}
              handleChange={props.handleChange}
              formData={props.formData}
              profileImage={props.profileImage}
              {...props}
             />
    }
}


export default withUser(SignUpForm);