import React, { useState } from "react";
import fire from './Firebase';
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


const Auth = props =>  {


    const [formData, setFormData] = useState({
      email: "",
      password: "",
      loggingIn: true,
      firstName: '', 
      lastName: '',
      title: '',
      companyName: '',
      profileImgUrl: '',
      current: '',
      helpWith: '',
      impactGoal: '',
      accomplishment: ''
    });
    const [loggingIn, setLoginOrLogout] = useState(true);
    const [profileImage, setProfileImage] = useState('');
    

  const handleChange = e => {
    let { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
  }))
  };

  const handleEmailPasswordLogin = e => {
    e.preventDefault();
    let userObj = {
      email: formData.email,
      password: formData.password
    }
    props.login(userObj);
  };

 const handleEmailPasswordSignup = () => {
    
    // this.props.handleErrorMessage();
    let userObj = {
      email: formData.email,
      password: formData.password
    }

    return props.signup(userObj)
  };

  const handleLoginOrSignup = () => {
    setLoginOrLogout(!loggingIn);
  }
  
  const addPhoto = (profileImage) => {
    console.log('profile img in auth', profileImage)
    let name = "Img-"+Date.now(); 
    let storageRef = fire.storage().ref('/profilePictures/'+ name); 
    let uploadTask = storageRef.put(profileImage);
    uploadTask.on('state_changed', function(snapshot){ 
      // let progress =  
      //  (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
      //   let uploader = document.getElementById('uploader'); 
      //   uploader.value=progress; 
      //   switch (snapshot.state) { 
      //     case fire.storage.TaskState.PAUSED: 
      //       console.log('Upload is paused'); 
      //       break; 
      //     case fire.storage.TaskState.RUNNING: 
      //       console.log('Upload is running'); 
      //       break; 
      //   } 
  }, function(error) {console.log(error); 
    }, function() {
       // get the uploaded image url back 
       uploadTask.snapshot.ref.getDownloadURL().then( 
        function(downloadURL) { 
       // You get your url from here 
        console.log('File available at', downloadURL); 
        setProfileImage(downloadURL);
      // print the image url  
       console.log(downloadURL); 
    }); 
    })
  }

    console.log('auth props', props)
    return (
      <CenteredContainer>
        {loggingIn ?
          <SignInForm 
            handleLoginOrSignup={handleLoginOrSignup}
            handleEmailPasswordLogin={handleEmailPasswordLogin}
            handleChange={handleChange}
          />
          :
            <SignUpForm 
              handleChange={handleChange}
              handleEmailPasswordLogin={handleEmailPasswordLogin}
              handleEmailPasswordSignup={handleEmailPasswordSignup}  
              loggingIn={formData.loggingIn}
              handleLoginOrSignup={handleLoginOrSignup}
              addPhoto={addPhoto}
              email={formData.email}
              password={formData.password}
              formData={formData}
              profileImage={profileImage}
            />
        }
      </CenteredContainer>
    );
}

export default withRouter(withUser(Auth));