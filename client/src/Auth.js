import React from "react";
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import FormTitle from "./components/Forms/FormTitle";
import Horizontal from "./components/Logos/Horizontal";
import SignUpForm from './SignUpForm';
import { withRouter } from 'react-router-dom';
import { withUser } from "./context/UserProvider";
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
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loggingIn: true,
      authErrMsg: "",
      // step: 0
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

  // nextStep = e => {
  //  e.preventDefault();
  //  this.setState({ step: this.state.step + 1 })

  // }

  // previousStep = e => {
  //   e.preventDefault();
  //   this.setState({ step: this.state.step - 1 })
  // }


  render() {
   
    console.log(typeof this.state.step)

    return (
      <CenteredContainer>
      {this.state.loggingIn ?
        <SignInForm 
          handleLoginOrSignup={this.handleLoginOrSignup}
        />
        :
        <>
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
        </>
      }

        {this.state.authErrMsg && this.state.authErrMsg}
      </CenteredContainer>
    );
  }
}

export default withRouter(withUser(Auth));