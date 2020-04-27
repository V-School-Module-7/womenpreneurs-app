import React from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import FormTitle from "./components/Forms/FormTitle";
import SignUpForm from './SignUpForm';
import { withRouter } from 'react-router-dom';
import { withUser } from "./context/UserProvider";





// NOTE: NEED ERROR HANDLING FOR PASSWORD ISSUES (MIN LENGTH ETC)


class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loggingIn: true,
      authErrMsg: "",
      step: 0
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    // this.props.handleErrorMessage();
    let userObj = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(userObj);
    // localStorage.getItem()
    // .then((user) => {
    //   if (user) {
    //     return this.props.history.push('/home');
    //   } else {
    //     alert('hello there')
    //   }
    // })

    // this.props.history.push('/home')
    
  };

  handleEmailPasswordSignup = (e) => {
    e.preventDefault();
    // this.props.handleErrorMessage();
    let userObj = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.signup(userObj)
      //.then(user => {
      //firestorage.addthing(userobj , {
        //stuff from the form to add to user obj in db 
      //})
      //})
    
    // this.props.history.push('/linkedIn');
    
  };

  handleLoginOrSignup = () => {
    this.setState({
      loggingIn: !this.state.loggingIn
    })
  }

  nextStep = e => {
   e.preventDefault();
   this.setState({ step: this.state.step + 1 })

  }

  previousStep = e => {
    e.preventDefault();
    this.setState({ step: this.state.step - 1 })
  }


  render() {
   
    return (
      <CenteredContainer>
      {this.state.loggingIn ?
      <>
      <span style={{display: 'flex'}}><p>Not yet a member?</p><p onClick={this.handleLoginOrSignup} style={{color: '#8B7071', marginLeft: '4px' }}>sign up</p></span>
      <Form>
        <FormTitle>Log in</FormTitle>
            <FormInput
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
              required='required'
            />
            <FormInput
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
              required='required'
            />
          <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
          <FormButton
            primary
            type="submit"
            onClick={this.handleEmailPasswordLogin}
          >
            Login
          </FormButton>
          </div>
        </Form>
        </>
        //ternary else
        :
        //
        <SignUpForm 
          handleChange={this.handleChange}
          handleEmailPasswordSignup={this.handleEmailPasswordSignup}
          nextStep={this.nextStep} 
          previousStep={this.previousStep} 
          handleEmailPasswordSignup={this.handleEmailPasswordSignup}  
          email={this.state.email}
          password={this.state.password}
          step={this.state.step}
          loggingIn={this.state.loggingIn}
          handleLoginOrSignup={this.handleLoginOrSignup}
         {...this.state}
        />
      }

        {this.state.authErrMsg && this.state.authErrMsg}
      </CenteredContainer>
    );
  }
}

export default withRouter(withUser(Auth));