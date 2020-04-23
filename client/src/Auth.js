import React from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import FormTitle from "./components/Forms/FormTitle";
import { withRouter } from 'react-router-dom';
import { withUser } from "./context/UserProvider";



// NOTE: NEED ERROR HANDLING FOR PASSWORD ISSUES (MIN LENGTH ETC)


class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEmailPasswordLogin = e => {
    e.preventDefault();
    let userObj = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(userObj)
  };

  handleEmailPasswordSignup = e => {
    e.preventDefault();
    let userObj = {
      email: this.state.email,
      password: this.state.password
    }
    try {
      this.props.signup(userObj)
    }
    catch(error) {
      console.dir(error);
    }
    finally {
      return this.props.history.push('/linkedIn');
    }
  };

  render() {
   
    return (
      <CenteredContainer>

        <Form>
        <FormTitle>Login</FormTitle>
          <h4>create account</h4>
            <FormInput
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <FormInput
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
          <FormButton
            primary
            type="submit"
            onClick={this.handleEmailPasswordLogin}
          >
            Login
          </FormButton>
          {/* <div style={{alignSelf: 'center', width: '1px', height: '40px', backgroundColor: 'lightgrey', marginLeft: '10px', marginRight: '10px'}}></div> */}
          <FormButton
            type="submit"
            onClick={this.handleEmailPasswordSignup}
          >
            Signup
          </FormButton>
          {/* <h4>create account</h4> */}
          </div>
        </Form>


        {this.state.authErrorMsg && this.state.authErrorMsg}
      </CenteredContainer>
    );
  }
}

export default withRouter(withUser(Auth));