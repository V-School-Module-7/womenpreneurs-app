import React from "react";
import AddCard from "./AddCard"
import { withRouter } from 'react-router-dom';
import { withUser } from "./context/UserProvider";

// const firebaseAppAuth = firebaseApp.Auth();

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
    this.props.signup(userObj)
      // this.props.history.push('/home');
  };

  render() {

    return (
      <div>
        <form>
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

        </form>
        {this.state.authErrorMsg && this.state.authErrorMsg}
        <AddCard/>
      </div>
    );
  }
}

export default withRouter(withUser(Auth));