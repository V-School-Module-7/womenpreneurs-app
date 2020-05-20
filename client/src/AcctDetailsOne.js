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
  return (
    <CenteredContainer>
      <PageTitle>Account Details</PageTitle>
      {props.userInfo.smallProfileImgUrl ?  <div>
          <h2>Your LinkedIn Account Info</h2>
          <div style={{display: 'flex', width: '350px'}}>
          <img style={{borderRadius: '50%'}} src={props.userInfo.smallProfileImgUrl} alt="linkedin profile image"/>
          <span style={{display: 'flex', marginLeft: '75px'}}>
            <h3>{props.userInfo.firstName}</h3>
            <h3>{props.userInfo.lastName}</h3>
          </span>
          <span>
            <h4>{props.title}</h4>
            <h4>{props.companyName}</h4>
          </span>
          </div>
          <p style={{textAlign: 'center', width: '350px'}}>
          If needed, adjust your account details to how you want to be represented on Womanpreneurs. We have also 
          pulled your LinkedIn account id in order to offer features such as making LinkedIn connections from Womanpreneurs.
        </p>
        </div>: <h4>Loading LinkedIn Data...</h4>}
      <Form>
          <FormInput 
            onChange={(e)=>props.handleChange(e)}
            value={props.value || props.userInfo.firstName}
            name="firstName"
            placeholder="first name"
            />
          <FormInput 
            onChange={(e)=>props.handleChange(e)}
            value={props.value || props.userInfo.lastName}
            name="lastName"
            placeholder="last name"
            />
          <FormInput 
            onChange={(e)=>props.handleChange(e)}
            value={props.value}
            name="companyName"
            placeholder="company name"
            />
          <FormInput 
            onChange={(e)=>props.handleChange(e)}
            value={props.value}
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