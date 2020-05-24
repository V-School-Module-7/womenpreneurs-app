import React, { useState } from "react";
import { withUser } from './context/UserProvider';
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import Horizontal from "./components/Logos/Horizontal";
import FormTitle from "./components/Forms/FormTitle";
// import fire from './Firebase';


const SignUpOne = (props) => {

 const [errMessage, setErrMessage] = useState('')


  const createUser = event => {
    event.preventDefault()
    let userObj = {
      email: props.email,
      password: props.password
    }
    props.signup(userObj)
    props.nextStep()
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
            required
          />
          <FormInput
            onChange={props.handleChange}
            value={props.value}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <h3>{errMessage}</h3>
          {/* <FormButton primary onClick={createUser}> */}
          <FormButton primary onClick={createUser}>
            Sign Up
          </FormButton>
        </Form>
      </>
    );
}

export default withUser(SignUpOne);
