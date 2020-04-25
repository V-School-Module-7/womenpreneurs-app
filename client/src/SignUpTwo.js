import React from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import IncrementButton from "./components/Forms/IncrementButton";
import DecrementButton from "./components/Forms/DecrementButton";
import FormTitle from "./components/Forms/FormTitle";
import CenteredContainer from "./components/Containers/CenteredPageContainer";

class SignUpTwo extends React.Component {
  render() {
    return (
      <CenteredContainer>
        <FormTitle>Questionnaire</FormTitle>
        <IncrementButton primary onClick={this.props.nextStep}>
          Continue
        </IncrementButton>
        <DecrementButton primary onClick={this.props.previousStep}>
          Back
        </DecrementButton>
      </CenteredContainer>
    );
  }
}

export default SignUpTwo;
