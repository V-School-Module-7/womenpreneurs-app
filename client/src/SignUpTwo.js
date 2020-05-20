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
        largeProfileImgUrl: result.data.profilePicture["displayImage~"].elements[2].identifiers[0].identifier,
        smallProfileImgUrl: result.data.profilePicture["displayImage~"].elements[0].identifiers[0].identifier,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };

  const callLinkedIn = () => {
   window.open(`http://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86pzo1h1r9o6iu&redirect_uri=http://localhost:3000/signup&state=vrstr238957xvbthg&scope=r_liteprofile%20r_emailaddress`, '_top')
  }

  //need to get &state off of the linkedin code before submitting function
  // check linkedCode in devtools.


  
  console.log('props', props)
  
    return (
      <CenteredContainer>
        <PageTitle>Account Details</PageTitle>
        <LinkedInButton type='button' onClick={callLinkedIn}>Authorize LinkedIn<LinkedInButtonLogo/></LinkedInButton>
         {/* {linkedCode && <button onClick={getData}>Pull My LinkedIn Account</button>} */}
          {userInfo.smallProfileImgUrl &&  <div>
            <h2>Your LinkedIn Account Info</h2>
            <div style={{display: 'flex', width: '350px'}}>
            <img style={{borderRadius: '50%'}} src={userInfo.smallProfileImgUrl} alt="linkedin profile image"/>
            <span style={{display: 'flex', marginLeft: '75px'}}>
              <h3>{userInfo.firstName}</h3>
              <h3>{userInfo.lastName}</h3>
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
          </div>}
        <Form>
            <FormInput 
              onChange={(e)=>props.handleChange(e)}
              value={props.value || userInfo.firstName}
              name="firstName"
              placeholder="first name"
              />
            <FormInput 
              onChange={(e)=>props.handleChange(e)}
              value={props.value || userInfo.lastName}
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

export default withRouter(withUser(SignUpTwo));
