import React, { useEffect } from "react";
import { withRouter, useRouteMatch } from 'react-router-dom';
import { withUser } from "./context/UserProvider";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import Horizontal from "./components/Logos/Horizontal";
import FormTitle from "./components/Forms/FormTitle";


const SignUpOne = (props) => {




  let { path, url } = useRouteMatch();

  useEffect(() => {
    if (props.uid) {
      props.history.push(`${path}/linkedin`)
    }
  })
  
  
  
  const handleSignUp = (e) => {
    e.preventDefault();
    let user = {
      email: props.email,
      password: props.password
    }
    props.signup(user)
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
            onChange={props.handleChange}
            type="email"
            name="email"
            placeholder="Email"
          />
          <FormInput
            onChange={props.handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormButton primary onClick={handleSignUp}>
            Sign Up
          </FormButton>
        </Form>
      </>
    );
}

export default withRouter(withUser(SignUpOne));
