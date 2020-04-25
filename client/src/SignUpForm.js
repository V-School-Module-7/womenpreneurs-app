import React from "react";
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import SignUpFour from './SignUpFour';

class SignUpForm extends React.Component {

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

  render() {
    if (this.props.step === 0) {
      return <SignUpOne 
              nextStep={this.props.nextStep}
              handleChange={this.props.handleChange}
             />
    } else if (this.props.step === 1) {
      return <SignUpTwo 
              nextStep={this.props.nextStep}
              previousStep={this.props.previousStep}
              handleChange={this.props.handleChange}
             />
    } else if (this.props.step === 2) {
      return <SignUpThree 
              nextStep={this.props.nextStep}
              previousStep={this.props.previousStep}
              handleChange={this.props.handleChange}
             />
    } else if (this.props.step === 3) {
      return <SignUpFour
               handleSubmit={this.props.handleSubmit}
               previousStep={this.props.previousStep}
               handleChange={this.props.handleChange}
             />
    }
  }
}


export default SignUpForm;