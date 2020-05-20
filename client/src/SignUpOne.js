import React, { useState } from "react";
import {withUser} from './context/UserProvider';
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import Horizontal from "./components/Logos/Horizontal";
import FormTitle from "./components/Forms/FormTitle";
import fire from './Firebase';


const SignUpOne = (props) => {

 const [errMessage, setErrMessage] = useState('')

  const createUser = event => {
    event.preventDefault()
    props.handleEmailPasswordSignup();
    fire.auth().createUserWithEmailAndPassword(props.email, props.password)
    .then(() => {
      props.nextStep();
    })
    .catch(error => {
      console.log('error code', error.code)
      switch (error.code) {
          case 'auth/email-already-in-use':
            setErrMessage(`Email address ${props.email} already in use.`);
            break;
          case 'auth/invalid-email':
            setErrMessage(`Email address ${props.email} is invalid.`);
            break;
          case 'auth/operation-not-allowed':
            setErrMessage(`Auth operation not allowed.`);
            break;
          default:
            setErrMessage('Error during signup');
        }
    });
  }


  console.log('props', props)
    return (
      <>
      <Horizontal />
        <span style={{ display: "flex" }}>
          <p>Already a member?</p>
          <p
            onClick={props.handleLoginOrSignup}
            style={{color: "#8B7071", marginLeft: "4px", cursor: 'pointer'}}
          >
            Log In
          </p>
        </span>
        <Form>
          <FormTitle>Sign up</FormTitle>
          <FormInput
            onChange={props.handleChange}
            value={props.value}
            type="email"
            name="email"
            placeholder="Email"
          />
          <FormInput
            onChange={props.handleChange}
            value={props.value}
            type="password"
            name="password"
            placeholder="Password"
          />
          <h3>{errMessage}</h3>
          {/* <FormButton primary onClick={createUser}> */}
          <FormButton primary onClick={props.nextStep}>
            Sign Up
          </FormButton>
        </Form>
      </>
    );
}

export default withUser(SignUpOne);
