import React, {useEffect, useState} from 'react';
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
  })




    return (
      <CenteredContainer>
        <Form>
          <FormTitle>Confirm and finish</FormTitle>
          <FormLabel>First Name</FormLabel>
          <FormInput name='firstName' onChange={props.handleChange} value={props.firstName} />
          <FormLabel>Last Name</FormLabel>
          <FormInput name='lastName' onChange={props.handleChange} value={props.lastName}/>
          <FormLabel>Title</FormLabel>
          <FormInput name='title' onChange={props.handleChange} value={props.title} />
          <FormLabel>Company Name</FormLabel>
          <FormInput name='companyName' onChange={props.handleChange} value={props.companyName} />
          <FormLabel>What are you currently working on?</FormLabel>
          <FormTextArea onChange={props.handleChange} name='current' value={props.current} />
          <FormLabel>What are some things you need help with right now?</FormLabel>
          <FormTextArea onChange={props.handleChange} name='helpWith' value={props.helpWith} />
          <FormLabel>
            How might you positively impact the Ascenda community?
            What do you enjoy helping with the most?
          </FormLabel>
          <FormTextArea onChange={props.handleChange} name='impactGoal' value={props.impactGoal} />
          <FormLabel>What are you most proud of?</FormLabel>
          <FormTextArea onChange={props.handleChange} name='accomplishment' value={props.accomplishment} />
          <span style={{display: 'flex', width: '297px', justifyContent: 'space-around'}}>
          <DecrementButton primary onClick={props.previousAcctDetailsStep}>◀ Back</DecrementButton>
          <FormButton onSubmit={props.handleEmailPasswordSignup} primary >Submit</FormButton>
          </span>
        </Form>
      </CenteredContainer>
    )
}

export default AcctDetailsThree;