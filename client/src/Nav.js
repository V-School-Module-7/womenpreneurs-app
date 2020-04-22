import React from 'react';
import {withUser} from './context/UserProvider';
import { Link, withRouter } from 'react-router-dom';
import fire from "./Firebase";


class Nav extends React.Component {

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/')
  }

  handleShowUser = () => {
    this.props.showToken()
  }

  render() {
    return (
      <div style={{width: '100%', height: '100px', display: 'flex', alignItems: 'center'}}>
        {this.props.uid ? <button style={{marginLeft: '40px'}} onClick={this.handleLogout}>Logout</button> : <Link to='/auth' style={{marginLeft: '40px'}}>Login</Link> }
      <button onClick={this.handleShowUser}>Log User Token</button>
      <div>{this.props.uid ? <Link to='/paymentform' style={{marginLeft: '40px'}}>Payment Form</Link> : ""}</div> 

      </div>
    )
  }
}

export default withRouter(withUser(Nav));