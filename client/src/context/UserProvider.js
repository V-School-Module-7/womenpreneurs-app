import React from 'react';
import axios from 'axios';
import firebase from 'firebase';
const UserContext = React.createContext();



let firebaseConfig = {
  apiKey: "AIzaSyAFJY-C3QAnvT1_TOS7ofTytAvy_ELDglk",
  authDomain: "womanpreneurs-auth-starter.firebaseapp.com",
  databaseURL: "https://womanpreneurs-auth-starter.firebaseio.com",
  projectId: "womanpreneurs-auth-starter",
  storageBucket: "womanpreneurs-auth-starter.appspot.com",
  messagingSenderId: "809060934869",
  appId: "1:809060934869:web:e4a27002185c9375082e5c"
};

//connects to firebase using admin
!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      user: localStorage.getItem("user") || {},
      uid: localStorage.getItem("uid") || "",
      authErrMsg: ''
    }
  }

  handleErrMsg = (errMsg) => {
    this.setState({authErrMsg: errMsg})
  }


  login = (user) => {
    this.setState({
      user: user,
      uid: user.uid
    })
    localStorage.setItem("uid", this.state.uid);
    localStorage.setItem("user", this.state.user);
  }

  signup = (user) => {
    this.setState({
      user: user,
      uid: user.uid
    })
    localStorage.setItem("uid", this.state.uid);
    localStorage.setItem('user', this.state.user);
  }

  logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("user");
    this.setState({
      user: {},
      uid: ""
    })
  }


  
  // authListener = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({
  //         user: user
  //       });
  //       localStorage.setItem("user", user.uid);
  //     } else {
  //       this.setState({
  //         user: null
  //       });
  //       localStorage.removeItem("user");
  //     }
  //   });
  // };


  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
        }}
      >
        { this.props.children }
      </UserContext.Provider>
    )
  }


}

export default UserProvider;


export const withUser = (C) => (props) => (
  <UserContext.Consumer>
    { value => <C {...value} {...props} /> }
  </UserContext.Consumer>
)

