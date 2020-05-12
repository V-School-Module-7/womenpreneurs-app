import React from 'react';
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormTextArea from "./components/Forms/FormTextArea";
import CenteredContainer from "./components/Containers/CenteredPageContainer"
import FormButton from "./components/Forms/FormButton";
import FormTitle from "./components/Forms/FormTitle";
import FormLabel from "./components/Forms/FormLabel";
import DecrementButton from "./components/Forms/DecrementButton";

class SignUpFour extends React.Component {


  render() {
    return (
      <CenteredContainer>
        <Form>
          <FormTitle>Confirm and finish</FormTitle>
          <FormInput
            onChange={this.props.handleChange}
            type="email"
            name="email"
            value={this.props.email}
          />
          <FormInput
            onChange={this.props.handleChange}
            type="password"
            name="password"
            value={this.props.password}
            required="required"
          />
          <FormInput name='firstName' onChange={this.props.handleChange} value={this.props.firstName} />
          <FormInput name='lastName' onChange={this.props.handleChange} value={this.props.lastName}/>
          <FormInput name='title' onChange={this.props.handleChange} value={this.props.title} />
          <FormInput name='companyName' onChange={this.props.handleChange} value={this.props.companyName} />
          <FormInput name='linkedinUrl' onChange={this.props.handleChange} value={this.props.linkedinUrl} />
          <FormLabel>What are you currently working on?</FormLabel>
          <FormTextArea onChange={this.props.handleChange} name='current' value={this.props.current} />
          <FormLabel>What are some things you need help with right now?</FormLabel>
          <FormTextArea onChange={this.props.handleChange} name='helpWith' value={this.props.helpWith} />
          <FormLabel>
            How might you positively impact the Ascenda community?
            What do you enjoy helping with the most?
          </FormLabel>
          <FormTextArea onChange={this.props.handleChange} name='impactGoal' value={this.props.impactGoal} />
          <FormLabel>What are you most proud of?</FormLabel>
          <FormTextArea onChange={this.props.handleChange} name='accomplishment' value={this.props.accomplishment} />
          <span style={{display: 'flex', width: '297px', justifyContent: 'space-around'}}>
          <DecrementButton primary onClick={this.props.previousStep}>◀ Back</DecrementButton>
          <FormButton onSubmit={this.props.handleEmailPasswordSignup} primary >Submit</FormButton>
          </span>
        </Form>
      </CenteredContainer>
    )
  }

}

export default SignUpFour;