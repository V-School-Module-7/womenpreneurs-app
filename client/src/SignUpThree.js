import React from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
// import FormTitle from "./components/Forms/FormTitle";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import PageTitle from "./components/Titles/PageTitle";
import IncrementButton from "./components/Forms/IncrementButton";
import DecrementButton from "./components/Forms/DecrementButton";
import FormLabel from "./components/Forms/FormLabel";

class SignUpThree extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      companyName: "",
    };
  }

  // NOTE: REFACTOR TO USE STYLED COMPONENTS!!!
  // handlechange of input to set state for name of input
  // submit button submits the user info && connects to firestore
  // will use UID saved from account creation for name of document in storage
  // can users email be used to populate form?
  // should linkedin connection populate form, you confirm, then continue?
  // will users want different profile pictures vs their linkedin photos?
  // ex. list dayjob employer on linkedin, but list your startup on womanpreneurs

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("submitted");
  // };

  render() {
    return (
      <CenteredContainer>
        <PageTitle>Account Details</PageTitle>
        <img
          style={{ width: "200px" }}
          src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png"
        />
        <Form>
          <FormInput name='firstName' onChange={this.props.handleChange} placeholder="first name" />
          <FormInput name='lastName' onChange={this.props.handleChange} placeholder="last name" />
          <FormInput name='title' onChange={this.props.handleChange} placeholder="title" />
          <FormInput name='companyName' onChange={this.props.handleChange} placeholder="company name" />
          <FormInput name='linkedinUrl' onChange={this.props.handleChange} placeholder="linkedin.com/in/myname" />
          <span style={{display: 'flex', justifyContent: 'space-around', width: '297px'}}>
            <DecrementButton primary onClick={this.props.previousStep}>
              ◀ Back
            </DecrementButton>
            <IncrementButton primary onClick={this.props.nextStep}>
              Next ▶
            </IncrementButton>
          </span>
        </Form>
      </CenteredContainer>
    );
  }
}

export default SignUpThree;
