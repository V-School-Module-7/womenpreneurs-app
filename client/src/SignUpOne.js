import React from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import Horizontal from "./components/Logos/Horizontal";
import FormTitle from "./components/Forms/FormTitle";


const SignUpOne = (props) => {

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
          <FormButton primary onClick={props.nextStep}>
            Sign Up
          </FormButton>
        </Form>
      </>
    );
}

export default SignUpOne;
