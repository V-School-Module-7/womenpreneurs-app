import React from 'react';
import fire from './Firebase';
import { withRouter } from 'react-router-dom';
import { withUser } from "./context/UserProvider";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormTextArea from "./components/Forms/FormTextArea";
import CenteredContainer from "./components/Containers/CenteredPageContainer"
import FormButton from "./components/Forms/FormButton";
import FormTitle from "./components/Forms/FormTitle";
import FormLabel from "./components/Forms/FormLabel";
import DecrementButton from "./components/Forms/DecrementButton";



const SignUpFive = (props) => {

  let db = fire.firestore();
  console.log('props profile image signup 5', props.profileImage)

  const handleCompleteUser = e => {
    e.preventDefault();
    db.collection("users").add({
      firstName: props.formData.firstName,
      lastName: props.formData.lastName,
      profileImgUrl: props.profileImage,
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
          <FormInput name='firstName' onChange={props.handleChange} value={props.formData.firstName} />
          <FormInput name='lastName' onChange={props.handleChange} value={props.formData.lastName}/>
          <FormInput name='title' onChange={props.handleChange} value={props.formData.title} />
          <FormInput name='companyName' onChange={props.handleChange} value={props.formData.companyName} />
          <FormLabel>What are you currently working on?</FormLabel>
          <FormTextArea onChange={props.handleChange} name='current' value={props.formData.current} />
          <FormLabel>What are some things you need help with right now?</FormLabel>
          <FormTextArea onChange={props.handleChange} name='helpWith' value={props.formData.helpWith} />
          <FormLabel>
            How might you positively impact the Ascenda community?
            What do you enjoy helping with the most?
          </FormLabel>
          <FormTextArea onChange={props.handleChange} name='impactGoal' value={props.formData.impactGoal} />
          <FormLabel>What are you most proud of?</FormLabel>
          <FormTextArea onChange={props.handleChange} name='accomplishment' value={props.formData.accomplishment} />
          <span style={{display: 'flex', width: '297px', justifyContent: 'space-around'}}>
          <DecrementButton primary onClick={props.previousStep}>◀ Back</DecrementButton>
          <FormButton onClick={handleCompleteUser} primary >Submit</FormButton>
          </span>
        </Form>
      </CenteredContainer>
    )
}

export default withRouter(withUser(SignUpFive));