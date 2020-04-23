import React, { useState } from "react";
import styled from "styled-components";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import PageTitle from "./components/Titles/PageTitle";
import FormTitle from "./components/Forms/FormTitle";



//things linkedin account has
// profile picture
// current employer
// personal statement
// location
// alma mater
// employment history
// connection

class LinkedIn extends React.Component {
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };

  render() {
    return (
      <CenteredContainer>
        <PageTitle>Account Setup</PageTitle>
        <img
          style={{ width: "200px" }}
          src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png"
        />
        {/* <form>
          <input
            placeholder="first name"
            name="firstName"
            onChange={this.handleChange}
          />
          <input
            placeholder="last name"
            name="lastName"
            onChange={this.handleChange}
          />
          <input
            placeholder="company name"
            name="companyName"
            onChange={this.handleChange}
          />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form> */}
        <Form>
          <FormInput placeholder="first name" />
          <FormInput placeholder="last name" />
          <FormInput placeholder="company name" />
          <FormInput placeholder="your industry" />
          <FormInput placeholder="interests" />
          <FormButton onSubmit={this.handleSubmit}>Submit</FormButton>
        </Form>
      </CenteredContainer>
    );
  }
}

export default LinkedIn;
