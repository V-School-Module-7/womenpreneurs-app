import React from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import FormTitle from "./components/Forms/FormTitle";

class SignUpOne extends React.Component {
  render() {
    return (
      <>
        <span style={{ display: "flex" }}>
          <p>Already a member?</p>
          <p
            onClick={this.handleLoginOrSignup}
            style={{ color: "#8B7071", marginLeft: "4px" }}
          >
            Log in
          </p>
        </span>
        <Form>
          <FormTitle>Sign up</FormTitle>
          <p
            style={{ color: "grey", marginBottom: "35px", fontStyle: "italic" }}
          >
            Clicking sign up will create an account with your entered email and
            password, and continue to personalize your account.
          </p>
          <FormInput
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
            required="required"
          />
          <FormInput
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            required="required"
          />
          <FormButton primary onClick={this.props.nextStep}>
            Continue
          </FormButton>
        </Form>
      </>
    );
  }
}

export default SignUpOne;
