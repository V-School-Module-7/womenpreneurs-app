import React, { useEffect } from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormTextArea from "./components/Forms/FormTextArea";
import IncrementButton from "./components/Forms/IncrementButton";
import DecrementButton from "./components/Forms/DecrementButton";
import FormTitle from "./components/Forms/FormTitle";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import FormLabel from "./components/Forms/FormLabel";

const AcctDetailsTwo = (props) => {

  useEffect(() => {
    //sets the scrollbar to top position, page was loading halfway scrolled
    window.scrollTo(0, 0);
  }, [])


    return (
      <CenteredContainer>
        <FormTitle>Questionnaire</FormTitle>
        {/* <span style={{width: '300px', display: 'flex'}}><p>Take a moment to read about our</p><p style={{color: '#8B7071', marginLeft: '4px' }}>values and intention</p></span> */}
        <Form>
          {/* <FormLabel>Do you agree with our values?</FormLabel>
          <div style={{alignSelf: 'flex-start'}}>
            <FormLabel>Yes</FormLabel>
            <button type='radio'></button>
            <FormLabel>No</FormLabel>
            <button type='radio'></button>
          </div> */}
          <FormLabel>What are you currently working on?</FormLabel>
          <FormTextArea onChange={e => props.updateFormData(e)} value={props.formData.current} name='current'/>
          <FormLabel>What are some things you need help with right now?</FormLabel>
          <FormTextArea onChange={e => props.updateFormData(e)} value={props.formData.helpWith} name='helpWith'/>
          <FormLabel>
            How might you positively impact the Ascenda community?
            What do you enjoy helping with the most?
          </FormLabel>
          <FormTextArea onChange={e => props.updateFormData(e)} value={props.formData.impactGoal} name='impactGoal'/>
          <FormLabel>What are you most proud of?</FormLabel>
          <FormTextArea onChange={e => props.updateFormData(e)} value={props.formData.accomplishment} name='accomplishment' />
        </Form>
        <span style={{display: 'flex', justifyContent: 'space-around', width: '297px'}}>
        <DecrementButton primary onClick={props.previousAcctDetailsStep}>
          ◀ Back
        </DecrementButton>
        <IncrementButton primary onClick={props.nextAcctDetailsStep}>
          Next ▶
        </IncrementButton>
        </span>
      </CenteredContainer>
    );
}

export default AcctDetailsTwo;
