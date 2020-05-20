import React from 'react';
import fire from '../Firebase';
require('dotenv').config();


const UserContext = React.createContext();

// let storage = firebase.storage();

class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      //NOTE: including user object to show data available, probably should not
      //keep in state in production? 
      user: localStorage.getItem("user") || {},
      uid: localStorage.getItem("uid") || "",
    }
  }

  login = (user) => {
    console.log('in context', user)
    fire
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(loggedInUser => {
        console.log('in .then login context loggedin', loggedInUser)
        this.authListener();
        window.location.href = window.location.origin + '/home';
      })
      .catch(error => {
        console.log(error)
        return error
      });
  }

  signup = (userObj) => {
    console.log('context signup', userObj)
    fire
      .auth()
      .createUserWithEmailAndPassword(userObj.email, userObj.password)
      .then(createdUser => {
        console.log('in .then() create user context', createdUser);
        this.authListener();
        window.location.href = window.location.origin + '/linkedin';
      })
      .catch(error => {
        console.log(error);
        return error
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

  // showToken = () => {
  //   fire.auth().currentUser.getIdToken().then((token) => {
  //     console.log('you are...', token)
  //   });
  // }
  
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user,
          uid: user.uid
        });
          localStorage.setItem("uid", user.uid);
          localStorage.setItem("user", user);
        console.log('local storage/state set item');
      } else {
        this.setState({
          user: null,
          uid: null
        });
        console.log('local storage remove');
        localStorage.removeItem("user");
        localStorage.removeItem("uid");
        // window.location.href = window.location.origin + '/home';
      }
    })
  };

  render() {    
    return (
      
      <UserContext.Provider
        value={{
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          hello: 'world',
          //pass firebase 
          ...this.state,
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