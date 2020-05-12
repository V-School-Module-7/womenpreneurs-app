import React, {useState, useEffect} from "react";
import {withRouter} from 'react-router-dom';
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


const SignUpTwo = (props) => {
  const [userInfo, setUserInfo] = useState([]);
  const [linkedCode, setCode] = useState('');


  useEffect(() => {
    if (props.history.location.search) {
      let code = props.history.location.search;
      code = code.split('=')[1];
      code = code.split('&')[0]
      console.log('code', code);
      setCode(code)
      if (linkedCode) {
        console.log('now can get access token', linkedCode)
      }
    }
  }, []);

  useEffect(() => {
    if (linkedCode) {
      console.log('can now get token with', linkedCode)
    }
  })

  // NOTE: REFACTOR TO USE STYLED COMPONENTS!!!
  // handlechange of input to set state for name of input
  // submit button submits the user info && connects to firestore
  // will use UID saved from account creation for name of document in storage
  // can users email be used to populate form?
  // should linkedin connection populate form, you confirm, then continue?
  // will users want different profile pictures vs their linkedin photos?
  // ex. list dayjob employer on linkedin, but list your startup on womanpreneurs

  // note: Add social media links to form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };

  const callLinkedIn = () => {
   window.open(`http://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86pzo1h1r9o6iu&redirect_uri=http://localhost:3000/acctsetup&state=vrstr238957xvbthg&scope=r_liteprofile`, '_top')
  }

  //need to get &state off of the linkedin code before submitting function
  // check linkedCode in devtools.

  const getData = async function() {
    let getLinkedinUser = fire.functions().httpsCallable('linkedinUser')
    let result = await getLinkedinUser({linkedinUser: linkedCode});
    if (result) {
      console.log('function result', result)
    }
  }

  

  
    return (
      <CenteredContainer>
        <PageTitle>Account Details</PageTitle>
        <LinkedInButton type='button' onClick={callLinkedIn}>Authorize LinkedIn<LinkedInButtonLogo/></LinkedInButton>
         <button onClick={getData}>Pull My LinkedIn Account</button>
          <p style={{textAlign: 'center', width: '350px', marginBottom: '30px'}}>
            If needed, adjust your account details to how you want to be represented on Womanpreneurs.
          </p>
        {/* <LinkedInButton onClick={callLinkedIn}>Connect to LinkedIn</LinkedInButton> */}
        {/* <div style={{display: 'flex', alignItems: 'center', marginTop: '16px'}}>
          <p onClick={setFormVisibility}>I do not want to connect to LinkedIn</p>
        </div> */}

        <Form>
          <>
            <FormInput name='firstName' onChange={props.handleChange} placeholder="first name" />
            <FormInput name='lastName' onChange={props.handleChange} placeholder="last name" />
            <FormInput name='title' onChange={props.handleChange} placeholder="title" />
            <FormInput name='companyName' onChange={props.handleChange} placeholder="company name" />
          </>
          
           {/* <FormInput name='linkedinUrl' onChange={props.handleChange} placeholder="linkedin.com/in/myname" /> */}
          <span style={{display: 'flex', justifyContent: 'space-around', width: '297px'}}>
            <DecrementButton primary onClick={props.previousStep}>
              ◀ Back
            </DecrementButton>
            <IncrementButton primary onClick={props.nextStep}>
              Next ▶
            </IncrementButton>
          </span>
        </Form>
      </CenteredContainer>
    );
}

export default withUser(withRouter(SignUpTwo));
