import React, {useState, useEffect} from "react";
import {withRouter, Redirect} from 'react-router-dom';
import {withUser} from './context/UserProvider';
import fire from './Firebase';
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import LinkedInButton from "./components/Buttons/LinkedInButton";
import LinkedInButtonLogo from "./components/Logos/LinkedInButtonLogo";
// import FormTitle from "./components/Forms/FormTitle";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import PageTitle from "./components/Titles/PageTitle";
import IncrementButton from "./components/Forms/IncrementButton";
import DecrementButton from "./components/Forms/DecrementButton";
import FormLabel from "./components/Forms/FormLabel";
const axios = require('axios');
require('dotenv').config();


const AcctDetailsOne = (props) => {

  console.log('formdata', props.formData);
  console.log('userInfo', props.userInfo);

  return (
    <CenteredContainer>
      <PageTitle>Account Details</PageTitle>
      {props.userInfo.smallProfileImgUrl ?  <div>
          <h2>Basic Account Info</h2>
          <div style={{display: 'flex', width: '400px', justifyContent: 'space-around'}}>
          <img style={{borderRadius: '50%', height: '100px', width: '100px', alignSelf: 'centered'}} src={props.userInfo.smallProfileImgUrl} alt="linkedin profile image"/>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <span style={{display: 'flex', justifyContent: 'flex-end'}}>
            <h3>{props.formData.firstName}</h3>
            <h3>{props.formData.lastName}</h3>
          </span>
          <span style={{textAlign: 'center'}}>
            <h4>{props.formData.companyName}</h4>
            <h4>{props.formData.title}</h4>
          </span>
          </div>
          </div>
          <p style={{textAlign: 'center', width: '350px'}}>
          If needed, adjust your account details to how you want to be represented on Womanpreneurs. We have also 
          pulled your LinkedIn account id in order to offer features such as making LinkedIn connections from Womanpreneurs.
        </p>
        </div>: <h4>Loading LinkedIn Data...</h4>}
      <Form>
          <FormInput 
            onChange={e => props.updateFormData(e)}
            value={props.formData.firstName}
            name="firstName"
            placeholder="first name"
            />
          <FormInput 
            onChange={e => props.updateFormData(e)}
            value={props.formData.lastName}
            name="lastName"
            placeholder="last name"
            />
          <FormInput 
            onChange={e => props.updateFormData(e)}
            value={props.formData.companyName}
            name="companyName"
            placeholder="company name"
            />
          <FormInput 
            onChange={e => props.updateFormData(e)}
            value={props.formData.title}
            name="title"
            placeholder="title ex. Founder, Engineer"
            />
        <span style={{display: 'flex', justifyContent: 'space-around', width: '297px'}}>
          {/* <DecrementButton primary onClick={props.previousStep}>
            ◀ Back
          </DecrementButton> */}
          <IncrementButton primary onClick={props.nextAcctDetailsStep}>
            Next ▶
          </IncrementButton>
        </span>
      </Form>
    </CenteredContainer>
  );
}


export default AcctDetailsOne;