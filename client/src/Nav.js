import React from 'react';
import {withUser} from './context/UserProvider';
import { Link, withRouter } from 'react-router-dom';
import firebase from "firebase";

class Nav extends React.Component {

  

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/')
  }

  handleShowUser = () => {
    firebase.auth().currentUser.getIdToken().then((token) => {
      console.log('you are...', token)
    });
  }

  render() {
    return (
      <div style={{width: '100%', height: '100px', display: 'flex', alignItems: 'center'}}>
        {this.props.user && this.props.uid ? <button style={{marginLeft: '40px'}} onClick={this.handleLogout}>Logout</button> : <Link to='/auth' style={{marginLeft: '40px'}}>Login</Link> }
      <button onClick={this.handleShowUser}>who am i?</button>
      </div>
    )
  }
}


export default withRouter(withUser(Nav));