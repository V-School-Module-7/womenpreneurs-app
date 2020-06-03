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


const SignUpTwo = (props) => {
  
  
  const [userInfo, setUserInfo] = useState('');
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
      getData()
      .then((userObj) => {
        console.log('have user obj')
        setUserInfo(userObj)
        if (userInfo) {
          console.log('we have the user')
          localStorage.setItem("userInfo", JSON.stringify(userInfo))
            // return <Redirect
            //   to={{
            //     pathname: "/acctsetup",
            //     state: { userInfo: localStorage.getItem("userInfo") }
            //   }}/>
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  })

  const getData = async function() {
    let getLinkedinUser = fire.functions().httpsCallable('linkedinUser')
    let result = await getLinkedinUser({linkedinUser: linkedCode});
    if (result) {
      console.log(result)
      let userObj = {
        firstName: result.data.firstName.localized.en_US,
        lastName: result.data.lastName.localized.en_US,
        userId: result.data.id,
        profileImgUrl: result.data.profilePicture["displayImage~"].elements[2].identifiers[0].identifier,
        title: '',
        companyName: ''
      }
      return userObj;
    }
    return
  }

  // NOTE: REFACTOR TO USE STYLED COMPONENTS!!!
  // handlechange of input to set state for name of input
  // submit button submits the user info && connects to firestore
  // will use UID saved from account creation for name of document in storage
  // can users email be used to populate form?
  // should linkedin connection populate form, you confirm, then continue?
  // will users want different profile pictures vs their linkedin photos?
  // ex. list dayjob employer on linkedin, but list your startup on womanpreneurs

  // note: Add social media links to form
 

  const callLinkedIn = () => {
   window.open(`http://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86pzo1h1r9o6iu&redirect_uri=http://localhost:3000/acctsetup&state=vrstr238957xvbthg&scope=r_liteprofile%20r_emailaddress`, '_top')
  }

  //need to get &state off of the linkedin code before submitting function
  // check linkedCode in devtools.


  
  console.log('props', props)
  
    return (
      <CenteredContainer>
        <PageTitle>Account Details</PageTitle>
        <p>We use linkedin to help complete your profile and give you access to features
          such as making connections through Ascenda/Womanpreneurs.  If you do not authorize 
          Linkedin you will NOT have access to these features.
        </p>
        <LinkedInButton type='button' onClick={callLinkedIn}>Authorize LinkedIn<LinkedInButtonLogo/></LinkedInButton>
        {/* TODO: Auth flow for non-linkedin users */}
        <h2 onClick={props.nextStep}>I understand and wish to proceed without LinkedIn</h2>
        <Form>
          <span style={{display: 'flex', justifyContent: 'space-around', width: '297px'}}>
            <DecrementButton primary onClick={props.previousStep}>
              ◀ Back
            </DecrementButton>
            {/* <IncrementButton primary onClick={props.nextStep}>
              Next ▶
            </IncrementButton> */}
          </span>
        </Form>
      </CenteredContainer>
    );
}

export default withRouter(withUser(SignUpTwo));
