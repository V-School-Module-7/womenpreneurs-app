import React from 'react';
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import FormTitle from "./components/Forms/FormTitle";
import DecrementButton from "./components/Forms/DecrementButton";

class SignUpFour extends React.Component {


  render() {
    return (
      <Form>
        confirmation and submit
        <DecrementButton primary onClick={this.props.previousStep}>Back</DecrementButton>
        <FormButton primary >Submit</FormButton>
      </Form>
    )
  }

}

export default SignUpFour;