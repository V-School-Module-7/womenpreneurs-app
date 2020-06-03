import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "./context/UserProvider";
import fire from './Firebase';
import Form from "./components/Forms/Form";
import FormInput from "./components/Forms/FormInput";
import CenteredContainer from "./components/Containers/CenteredPageContainer";
import PageTitle from "./components/Titles/PageTitle";
import IncrementButton from "./components/Forms/IncrementButton";
require("dotenv").config();

const SignUpThree = (props) => {
  
  const [thumbnail, setThumbnail] = useState();


  const handlePhotoUpload = (e) => {
    const profileImage = e.target.files[0]
    if (profileImage) {
      props.addPhoto(profileImage)
      setThumbnail(profileImage)
    }
  }

  console.log("acct details one props", props.formData);

  return (
    <CenteredContainer>
      <PageTitle>Account Details</PageTitle>
      <div>
        <input type='file' onChange={(e) => handlePhotoUpload(e)} />
      </div>
      <div style={{ width: "392px", display: "flex", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)', padding: '10px', borderRadius: '8px' }}>
           <img
            style={{
              borderRadius: "25%",
              height: "80px",
              width: "80px",
              alignSelf: "center",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            src={props.profileImage}
            alt="linkedin profile image"
          />
            <div style={{marginLeft: '24px', alignSelf: 'center'}}>
              {props.formData.firstName ? <h3 style={{lineHeight: '8px', color: '#5A93B5'}}>{props.formData.firstName} {props.formData.lastName}</h3> : <h3 style={{color: 'grey', lineHeight: '8px'}}>Your Name</h3>}
              {props.formData.companyName !== "" ? <h4 style={{lineHeight: '4px', color: '#4D4D4D'}}>{props.formData.companyName}</h4> : <h4 style={{color: 'grey', lineHeight: '4px'}}>Company Name</h4>}
              {props.formData.title !== "" ? <h4 style={{lineHeight: '4px', color: '#4D4D4D'}}>{props.formData.title}</h4> : <h4 style={{color: 'grey', lineHeight: '4px'}}>Title</h4>}
            </div>
          </div>
      <Form>
        <FormInput
        onChange={props.handleChange}
          value={props.formData.firstName}
          name="firstName"
          placeholder="first name"
        />
        <FormInput
          onChange={props.handleChange}
          value={props.formData.lastName}
          name="lastName"
          placeholder="last name"
        />
        <FormInput
          onChange={props.handleChange}
          value={props.formData.companyName}
          name="companyName"
          placeholder="company name"
        />
        <FormInput
          onChange={props.handleChange}
          value={props.formData.title}
          name="title"
          placeholder="title ex. Founder, Engineer"
        />
        <span
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "297px",
          }}
        >
          {/* <DecrementButton primary onClick={props.previousStep}>
            ◀ Back
          </DecrementButton> */}
          <IncrementButton primary onClick={props.nextStep}>
            Next ▶
          </IncrementButton>
        </span>
      </Form>
    </CenteredContainer>
  );
};

export default withRouter(withUser(SignUpThree));