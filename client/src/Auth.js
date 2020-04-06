import React from "react";
import FirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { withRouter } from 'react-router-dom';
import { withUser } from "./context/UserProvider";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      authErrorMsg: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEmailPasswordLogin = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user.user);
        this.props.login(user.user);
      })
      .then(() => {
        firebase.auth().currentUser.getIdToken().then((token) => {
          console.log('token', token)
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          authErrorMsg: error.message
        });
      });
      this.props.history.push('/home');
  };

  handleEmailPasswordSignup = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user.user);
        this.props.signup(user.user);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          authErrorMsg: error.message
        });
      });
      firebase.auth().currentUser.getIdToken().then((token) => {
        console.log('token', token)
      });
      this.props.history.push('/home');
  };

  render() {

    return (
      <div className="col-md-6">
        <form>
          <div class="form-group">
            <label>Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
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
      </div>
    );
  }
}

export default withRouter(withUser(Auth));
