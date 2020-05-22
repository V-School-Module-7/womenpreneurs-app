import React, {useState, useEffect} from "react";
import {withRouter, Redirect} from 'react-router-dom';
import {withUser} from './context/UserProvider';
import AcctDetailsOne from './AcctDetailsOne';
import AcctDetailsTwo from './AcctDetailsTwo';
import AcctDetailsThree from './AcctDetailsThree';
import fire from './Firebase';
require('dotenv').config();


const LinkedinInfo = (props) => {
  
  const [acctDetailsStep, setAcctDetailsStep] = useState(0);
  const [userInfo, setUserInfo] = useState('');
  const [linkedCode, setCode] = useState('');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    companyName: "",
    current: "",
    helpWith: "",
    impactGoal: "",
    accomplishment: ""
  });

  const updateFormData = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const { firstName, 
          lastName, 
          title, 
          companyName, 
          current, 
          helpWith, 
          impactGoal, 
          accomplishment } = formData;

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

  const nextAcctDetailsStep = () => {
    setAcctDetailsStep(acctDetailsStep + 1);
  }

  const previousAcctDetailsStep = () => {
    setAcctDetailsStep(acctDetailsStep - 1);
  }

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
      if (userObj) {
        setFormData({
          firstName: userObj.firstName,
          lastName: userObj.lastName
        })
      }
      return userObj;
    }
  }

  const handleSubmit = () => {
    // handle form submission
    // user object creation
  }

  // NOTE: REFACTOR TO USE STYLED COMPONENTS!!!
  // handlechange of input to set state for name of input
  // submit button submits the user info && connects to firestore
  // will use UID saved from account creation for name of document in storage
  // can users email be used to populate form?
  // should linkedin connection populate form, you confirm, then continue?
  // will users want different profile pictures vs their linkedin photos?
  // ex. list dayjob employer on linkedin, but list your startup on womanpreneurs

  console.log('user info', userInfo);


  if (acctDetailsStep === 0) {
    return <AcctDetailsOne
              userInfo={userInfo}
              nextAcctDetailsStep={nextAcctDetailsStep}
              formData={formData}
              updateFormData={updateFormData}
              updateFormData={updateFormData}
           />
  } else if (acctDetailsStep === 1) {
    return <AcctDetailsTwo
              nextAcctDetailsStep={nextAcctDetailsStep}
              previousAcctDetailsStep={previousAcctDetailsStep}
              formData={formData}
              updateFormData={updateFormData}
              updateFormData={updateFormData}
           />
  } else if (acctDetailsStep === 2) {
    return <AcctDetailsThree 
              previousAcctDetailsStep={previousAcctDetailsStep}
              handleSubmit={handleSubmit}
              formData={formData}
              updateFormData={updateFormData}
              updateFormData={updateFormData}
           />
  } 
}

export default withRouter(withUser(LinkedinInfo));
