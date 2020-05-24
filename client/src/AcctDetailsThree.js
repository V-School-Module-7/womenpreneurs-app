import React, {useEffect, useState} from 'react';
import {withUser} from './context/UserProvider';
import {withRouter, Redirect} from 'react-router-dom';
import fire from './Firebase';
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormTextArea from "./components/Forms/FormTextArea";
import CenteredContainer from "./components/Containers/CenteredPageContainer"
import FormButton from "./components/Forms/FormButton";
import FormTitle from "./components/Forms/FormTitle";
import FormLabel from "./components/Forms/FormLabel";
import DecrementButton from "./components/Forms/DecrementButton";

const AcctDetailsThree = (props) => {

  useEffect(() => {
    //sets the scrollbar to top position, page was loading halfway scrolled
    window.scrollTo(0, 0);
  }, [])

  let db = fire.firestore()
  db.settings({ timestampsInSnapshots: true });


  const handleUserCreation = e => {
    e.preventDefault()
    alert('submitting in three')
    // handle form submission
    // user object creation
    console.log('form data when submittting', props.formData)
    db.collection("users").add({
      firstName: props.formData.firstName,
      lastName: props.formData.lastName,
      linkedInId: props.formData.linkedInId,
      smallProfileImage: props.formData.smallProfileImage,
      largeProfileImage: props.formData.largeProfileImage,
      title: props.formData.title,
      companyName: props.formData.companyName,
      current: props.formData.current,
      helpWith: props.formData.helpWith,
      impactGoal: props.formData.impactGoal,
      accomplishment: props.formData.accomplishment
    })
    .then(docRef => {
      console.log('docRef', docRef)
      props.history.push("/home")
    })
    .catch(err => {
      console.log(err)
    })
  }
 


    return (
      <CenteredContainer>
        <Form>
          <FormTitle>Confirm and finish</FormTitle>
          <FormLabel>First Name</FormLabel>
          <FormInput name='firstName' onChange={e => props.updateFormData(e)} value={props.formData.firstName} />
          <FormLabel>Last Name</FormLabel>
          <FormInput name='lastName' onChange={e => props.updateFormData(e)} value={props.formData.lastName}/>
          <FormLabel>Title</FormLabel>
          <FormInput name='title' onChange={e => props.updateFormData(e)} value={props.formData.title} />
          <FormLabel>Company Name</FormLabel>
          <FormInput name='companyName' onChange={e => props.updateFormData(e)} value={props.formData.companyName} />
          <FormLabel>What are you currently working on?</FormLabel>
          <FormTextArea onChange={e => props.updateFormData(e)} name='current' value={props.formData.current} />
          <FormLabel>What are some things you need help with right now?</FormLabel>
          <FormTextArea onChange={e => props.updateFormData(e)} name='helpWith' value={props.formData.helpWith} />
          <FormLabel>
            How might you positively impact the Ascenda community?
            What do you enjoy helping with the most?
          </FormLabel>
          <FormTextArea onChange={e => props.updateFormData(e)} name='impactGoal' value={props.formData.impactGoal} />
          <FormLabel>What are you most proud of?</FormLabel>
          <FormTextArea onChange={e => props.updateFormData(e)} name='accomplishment' value={props.formData.accomplishment} />
          <span style={{display: 'flex', width: '297px', justifyContent: 'space-around'}}>
          <DecrementButton primary onClick={props.previousAcctDetailsStep}>◀ Back</DecrementButton>
          <FormButton onClick={handleUserCreation} primary >Submit</FormButton>
          </span>
        </Form>
      </CenteredContainer>
    )
}

export default withRouter(withUser(AcctDetailsThree));