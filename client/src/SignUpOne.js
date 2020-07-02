import React, { useState, useEffect } from "react";
import { withUser } from './context/UserProvider';
import {withRouter} from 'react-router-dom';
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import Horizontal from "./components/Logos/Horizontal";
import FormTitle from "./components/Forms/FormTitle";
// import fire from './Firebase';


const SignUpOne = (props) => {

  const [emailPassword, setEmailPassword] = useState({
    email: '',
    password: ''
  })

  const createUser = event => {
    event.preventDefault()
    let userObj = {
      email: emailPassword.email,
      password: emailPassword.password
    }
    props.signup(userObj)
    props.nextStep()
  }

  const updateEmailPassword = (e) => {
    console.log('emailpass', emailPassword)
    let { name, value } = e.target;
     setEmailPassword(emailPassword => ({
       ...emailPassword,
       [name]: value
   }))
  }

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
            onChange={updateEmailPassword}
            value={emailPassword.email}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <FormInput
            onChange={updateEmailPassword}
            value={emailPassword.password}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {/* <h3>{errMessage}</h3> */}
          {/* <FormButton primary onClick={createUser}> */}
          <FormButton primary onClick={createUser}>
            Sign Up
          </FormButton>
        </Form>
      </>
    );
}

export default withRouter(withUser(SignUpOne));