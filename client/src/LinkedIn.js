import React, { useState } from "react";
import styled from "styled-components";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import PageTitle from "./components/Titles/PageTitle";
import FormTitle from "./components/Forms/FormTitle";



// ---- things they want from linkedin ----
// Name, title, organization, city/metro area, 
// profile pic, about and link to Linkedin 
//  --------------------------------------

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
        <PageTitle>Account Details</PageTitle>
        <img
          style={{ width: "200px" }}
          src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png"
        />
        <Form>
          <FormInput placeholder="first name" />
          <FormInput placeholder="last name" />
          <FormInput placeholder="title" />
          <FormInput placeholder="company name" />
          <FormInput placeholder="LinkedIn account url, ex. linkedin.com/in/janesmith" />
          <FormButton primary onSubmit={this.handleSubmit}>Submit</FormButton>
        </Form>
      </CenteredContainer>
    );
  }
}

export default LinkedIn;
