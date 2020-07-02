import React from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import Horizontal from "./components/Logos/Horizontal";
import FormTitle from "./components/Forms/FormTitle";
import LinkedInButton from "./components/Buttons/LinkedInButton";
import LinkedInButtonLogo from "./components/Logos/LinkedInButtonLogo";

const SignInForm = (props) => {
 
 


  return (
    <>
      <Horizontal />
      <span style={{ display: "flex" }}>
        <p>Not yet a member?</p>
        <p
          onClick={props.handleLoginOrSignup}
          style={{ color: "#8B7071", marginLeft: "4px", cursor: "pointer" }}
        >
          Sign Up
        </p>
      </span>
      <Form>
        <FormTitle>Log in</FormTitle>
        <FormInput
          onChange={props.handleChange}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <FormInput
          onChange={props.handleChange}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <FormButton primary onClick={props.handleEmailPasswordLogin}>Log In</FormButton>
      </Form>
    </>
  );
};

export default SignInForm;
