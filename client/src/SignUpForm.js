import React from "react";
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import SignUpFour from './SignUpFour';

const SignUpForm = (props) => {
  
  // formSteps = () => {
  //   if (this.props.step === 0) {
  //     return <SignUpOne 
  //             nextStep={this.props.nextStep}
  //            />
  //   } else if (this.props.step === 1) {
  //     return <SignUpTwo 
  //             nextStep={this.props.nextStep}
  //            />
  //   } else if (this.props.step === 2) {
  //     return <SignUpThree 
  //             nextStep={this.props.nextStep}
  //            />
  //   }
  // }

    if (props.step === 0) {
      return <SignUpOne 
              handleLoginOrSignup={props.handleLoginOrSignup}
              nextStep={props.nextStep}
              handleChange={props.handleChange}
              email={props.email}
              password={props.password}
              {...props}
             />
    } else if (props.step === 1) {
      return <SignUpTwo 
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              handleChange={props.handleChange}
              {...props}
             />
    } else if (props.step === 2) {
      return <SignUpThree 
              nextStep={props.nextStep}
              previousStep={props.previousStep}
              handleChange={props.handleChange}
              {...props}
             />
    } else if (props.step === 3) {
      return <SignUpFour
               handleSubmit={props.handleSubmit}
               previousStep={props.previousStep}
               handleChange={props.handleChange}
               {...props}
             />
    }
}


export default SignUpForm;