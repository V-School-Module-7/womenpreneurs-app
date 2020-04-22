import React from 'react';
import axios from 'axios';
import fire from '../Firebase';
import firebase from "firebase";


const UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      //NOTE: including user object to show data available, probably should not
      //keep in state in production? 
      user: localStorage.getItem("user") || {},
      uid: localStorage.getItem("uid") || "",
      authErrMsg: ''
    }
  }

  handleErrMsg = (errMsg) => {
    this.setState({authErrMsg: errMsg})
  }

  login = (user) => {
    console.log('in context', user)
    fire
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(loggedInUser => {
        console.log('in .then login context loggedin', loggedInUser)
        this.authListener();
      })
      .catch(error => {
        this.setState({
          authErrorMsg: error.message
        });
      });
  }

  signup = (user) => {
    console.log('context signup', user)
    fire
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(createdUser => {
        console.log('in .then() create user context', createdUser);
        this.authListener();
      })
      .catch(error => {
        console.log(error);
        this.setState({
          authErrorMsg: error.message
        });
      });
  }

  logout = () => {
    fire
    .auth()
    .signOut()
    .then(() => {
      this.authListener();
    })
  }

  showToken = () => {
    fire.auth().currentUser.getIdToken().then((token) => {
      console.log('you are...', token)
    });
  }
  
  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user,
          uid: user.uid
        });
          localStorage.setItem("uid", user.uid);
          localStorage.setItem("user", user)
        console.log('local storage/state set item')
      } else {
        this.setState({
          user: null,
          uid: null
        });
        console.log('local storage remove')
        localStorage.removeItem("user");
        localStorage.removeItem("uid")
      }
    });
  };


  render() {    
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          showToken: this.showToken
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