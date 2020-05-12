import React from 'react';
import {withUser} from './context/UserProvider';
import { Link, withRouter } from 'react-router-dom';
import VerticalLogo from "./components/Logos/Vertical";
import NavContainer from "./components/Containers/NavContainer";



const Nav = (props) => {

  const handleLogout = () => {
    props.logout();
    props.history.push('/home');
  }

  // handleShowUser = () => {
  //   this.props.showToken()
  // }

    return (
      <NavContainer>
        <Link to='/home'>
          <VerticalLogo />
        </Link>
        {props.uid ? <button style={{marginRight: '10px'}} onClick={handleLogout}>Logout</button> : <Link to='/auth' style={{marginRight: '10px'}}>Login/SignUp</Link> }
      {/* <button onClick={this.handleShowUser}>Log User Token</button> */}
      {/* <div>{this.props.uid ? 
        <Link to='/paymentform' style={{marginLeft: '40px'}}>Payment Form</Link> 
        : ""}
      </div>  */}
      </NavContainer>
    )
}

export default withRouter(withUser(Nav));