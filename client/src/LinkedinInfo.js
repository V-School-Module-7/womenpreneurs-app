import React, {useState, useEffect} from "react";
import {withRouter} from 'react-router-dom';
import {withUser} from './context/UserProvider';
import AcctDetailsOne from './AcctDetailsOne';
import AcctDetailsTwo from './AcctDetailsTwo';
import AcctDetailsThree from './AcctDetailsThree';
import fire from './Firebase';
require('dotenv').config();


const LinkedinInfo = (props) => {
  
  const [acctDetailsStep, setAcctDetailsStep] = useState(0);
  const [linkedCode, setCode] = useState('');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    linkedInId: "",
    smallProfileImage: "",
    largeProfileImage: "",
    title: "",
    companyName: "",
    current: "",
    helpWith: "",
    impactGoal: "",
    accomplishment: ""
  });

  console.log('current fb user', fire.auth().currentUser)
  console.log('porps location history search', props.history.location.search)

  // useEffect(() => {
  //     let code = props.history.location.search;
  //     code = code.split('=')[1];
  //     code = code.split('&')[0]
  //     console.log('code', code);
  //     setCode(code)
  //   if (linkedCode !== '' || linkedCode !== null) {
  //     getData()
  //   } else {
  //     return
  //   }
  // });
  // have a try again button if it doesn't pull linkedin data on page refresh etc
  const getData = () => {
    let getLinkedinUser = fire.functions().httpsCallable('linkedinUser')
    getLinkedinUser({linkedinUser: linkedCode})
    .then(result => {
      console.log('linkedin result', result)
     setFormData({
      firstName: result.data.firstName.localized.en_US,
      lastName: result.data.lastName.localized.en_US,
      linkedInId: result.data.id,
      profileImgUrl: result.data.profilePicture["displayImage~"].elements[2].identifiers[0].identifier,
      title: "",
      companyName: "",
      current: "",
      helpWith: "",
      impactGoal: "",
      accomplishment: ""
      })
    })
    .catch(err => console.dir(err))
  }

  const updateFormData = (e) => {
   let { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
  }))
};

  const nextAcctDetailsStep = () => {
    setAcctDetailsStep(acctDetailsStep + 1);
  }

  const previousAcctDetailsStep = () => {
    setAcctDetailsStep(acctDetailsStep - 1);
  }

  //current user in firebase

  // NOTE: REFACTOR TO USE STYLED COMPONENTS!!!
  // handlechange of input to set state for name of input
  // submit button submits the user info && connects to firestore
  // will use UID saved from account creation for name of document in storage
  // can users email be used to populate form?
  // should linkedin connection populate form, you confirm, then continue?
  // will users want different profile pictures vs their linkedin photos?
  // ex. list dayjob employer on linkedin, but list your startup on womanpreneurs



  if (acctDetailsStep === 0) {
    return <AcctDetailsOne
              nextAcctDetailsStep={nextAcctDetailsStep}
              formData={formData}
              updateFormData={updateFormData}
              linkedCode={linkedCode}
              setCode={setCode}
              getData={getData}
           />
  } else if (acctDetailsStep === 1) {
    return <AcctDetailsTwo
              nextAcctDetailsStep={nextAcctDetailsStep}
              previousAcctDetailsStep={previousAcctDetailsStep}
              formData={formData}
              updateFormData={updateFormData}
           />
  } else if (acctDetailsStep === 2) {
    return <AcctDetailsThree 
              previousAcctDetailsStep={previousAcctDetailsStep}
              formData={formData}
              updateFormData={updateFormData}
           />
  } 
}

export default withRouter(withUser(LinkedinInfo));
