import React from "react";
import fire from './Firebase';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { withRouter } from 'react-router-dom';
import { withUser } from "./context/UserProvider";



class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => {
        this.props.login(fire.auth().currentUser);
      }
    },
    signInSuccessUrl: '/home'
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
    this.props.signup(userObj)
      // this.props.history.push('/home');
  };

  render() {

    return (
      <div>
          {/* <form>
          <div>
            <label>Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            onClick={this.handleEmailPasswordLogin}
          >
            Login
          </button>
          <button
            onClick={this.handleEmailPasswordSignup}
            style={{ marginLeft: "25px" }}
          >
            Signup
          </button>
        </form> */}
        {this.state.authErrorMsg && this.state.authErrorMsg} 
      
        <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={fire.auth()}
        />
      
      </div>
    );
  }
}

export default withRouter(withUser(Auth));
