import React from "react";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import SignUpForm from './SignUpForm';
import { withRouter } from 'react-router-dom';
import { withUser } from './context/UserProvider';
import SignInForm from "./SignInForm";


//=================================================
//STEPS: 
// NOTE: WORKING IN SIGNUP FLOW, HAVENT TRIED SIGNIN
// 1) redirect user to linkedin sign in screen
// 2) retrieve access code from redirect url to /acctsetup (signup) or /home (signin)
// 3) immediately send post request to linkedin asking for the access token
// 4) start making requests using access token

// NOTE: THIS URL WORKED FOR GETTING OAUTH ACCESS TOKEN 
// https://www.linkedin.com/oauth/v2/accessToken?client_id=86pzo1h1r9o6iu&client_secret=RO4LMC5jDR2r4VHM&grant_type=authorization_code&redirect_uri=http://localhost:3000/acctsetup&code=AQQB6PVQWoSjS-gTu4gZ020nITfSyUTdJjZCUDsVfz3Sdjif10gJxk0RUfcRtZwlYUIbUnYo7eIApPr4o0j9tISkTET1TP2gPqavYlQOHO3E6vwq39CW8axISdFqFQOVrlNtE1tjU_AKuslEp7Nm-ocNZxOSMKyAUJMhDpQ_6gSBFJ0vqfX-96iFIYAAbg
// Will i need to make cloud function call to do any of this?
// ACCESS TOKEN: AQWmrGB17JQzNSX4pIuppHVCf5F9dcslqvUnBkqicUaenz7K2z9ema4gnGBcyO5FnIPTBS6h2cKaLZOrpG-336pG-uqAZS1oubf-l8K-BGiPqjaKzRM7RgvCFD1-6kOW08sBtLaYFNnOWhv4zQM2BBTGja3SB6vSD5KLzMTT1P_9Z5unixS_rEIJ2uXjVS0DIgF7C5AVkFinUL27O9XAjEntEpJTReAWX7_G_7JsCruXaXq3KYHlnQA7FTcg2OsCBSatf71cFKbpuxgNfPIJc4_5E_Od81VLm8rSIcn-UiaIOgiO8octZfHzxeHxxiAtgVX1lmSBlH186bzQguMNu97SNfL1rg
// GET REQUEST TO BASIC PROFILE HEADER INCLUDES 'Bearer: <ACCESSTOKEN>'
// GET--> https://api.linkedin.com/v2/me?oauth2_access_token=AQWmrGB17JQzNSX4pIuppHVCf5F9dcslqvUnBkqicUaenz7K2z9ema4gnGBcyO5FnIPTBS6h2cKaLZOrpG-336pG-uqAZS1oubf-l8K-BGiPqjaKzRM7RgvCFD1-6kOW08sBtLaYFNnOWhv4zQM2BBTGja3SB6vSD5KLzMTT1P_9Z5unixS_rEIJ2uXjVS0DIgF7C5AVkFinUL27O9XAjEntEpJTReAWX7_G_7JsCruXaXq3KYHlnQA7FTcg2OsCBSatf71cFKbpuxgNfPIJc4_5E_Od81VLm8rSIcn-UiaIOgiO8octZfHzxeHxxiAtgVX1lmSBlH186bzQguMNu97SNfL1rg
// WILL THEN TAKE DATA AND KEEP IN STATE OR STORE IN FIREBASE
// NEED TO GET ACCESS TO MORE PROFILE INFORMATION AND PICTURE
// profile endpoints include: localizedLastName & localizedFirstName,
// profilePicture.displayImage, id
// NOTE: NEED TO GET FULL PROFILE ACCESS
//
//=================================================






// NOTE: NEED ERROR HANDLING FOR PASSWORD ISSUES (MIN LENGTH ETC)


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggingIn: true,
      authErrMsg: "",
      firstName: '', 
      lastName: '',
      title: '',
      companyName: '',
      step: 0,
    };

  }

  nextStep = () => {
    this.setState(prev => {
     return {step: prev.step + 1}
   });
 }

 previousStep = () => {
  this.setState(prev => {
   return {step: prev.step - 1}
   });
 }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    // this.props.handleErrorMessage();
    let userObj = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(userObj);
  };

  handleEmailPasswordSignup = () => {
    
    // this.props.handleErrorMessage();
    let userObj = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.signup(userObj)
  };

  handleLoginOrSignup = () => {
    this.setState({
      loggingIn: !this.state.loggingIn
    })
  }


  render() {
    console.log('auth props', this.props)
    return (
        <CenteredContainer>
        {this.state.loggingIn ?
          <SignInForm 
            handleLoginOrSignup={this.handleLoginOrSignup}
          />
          :
          <>
            <SignUpForm 

              nextStep={this.nextStep}
              previousStep={this.previousStep}
              step={this.state.step}
              handleChange={this.handleChange}
              handleEmailPasswordLogin={this.handleEmailPasswordLogin}
              handleEmailPasswordSignup={this.handleEmailPasswordSignup}  
              loggingIn={this.state.loggingIn}
              handleLoginOrSignup={this.handleLoginOrSignup}
              email={this.state.email}
              password={this.state.password}
            />
          </>
        }

          {/* {this.state.authErrMsg && this.state.authErrMsg} */}
        </CenteredContainer>
    );
  }
}

export default withRouter(withUser(Auth));