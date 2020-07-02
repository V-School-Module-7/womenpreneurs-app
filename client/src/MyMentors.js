import React from 'react';
import {withUser} from './context/UserProvider';
import HomePageTitle from './components/Titles/HomePageTitle';
import CenteredContainer from './components/Containers/CenteredPageContainer';
import MentorCard from './components/Cards/MentorCard';
import MentorCardImage from './components/Images/MentorCardImage';
import MentorGrid from './components/Containers/MentorGrid';

const MyMentors = () => {

  let bgImage = 'https://images.squarespace-cdn.com/content/v1/56070012e4b041f4f55d427d/1548790161417-297UMTS9QX5XERR30IVE/ke17ZwdGBToddI8pDm48kCBXEs21Ja0Z623iLCCj7TB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaTd8tncDdU2K9kYh2asHZudedQylmVteCqE50LiRYaEGLDe_BHBL9JV7OZzPTrWmA/wp18.jpg?format=2500w';

  return (
    <CenteredContainer backgroundColor={'#fbf3eb'}>
      <HomePageTitle>MyMentors</HomePageTitle>
      <MentorGrid>
      <MentorCard>
        <MentorCardImage backgroundImage={bgImage} />
        <h4 style={{lineHeight: '10px'}}>Name</h4>
        <h4 style={{lineHeight: '10px'}}>Company</h4>
        <h4 style={{lineHeight: '10px'}}>Title</h4>
        <div style={{display: 'flex'}}>
          <img src={process.env.PUBLIC_URL + '/Slack_Mark_Web.png'} style={{width: '48px', height: '48px'}} />
          <img src={process.env.PUBLIC_URL + '/logotype.png'} style={{width: '24px', height: '24px', alignSelf: 'center', filter: 'invert(27%) sepia(87%) saturate(1401%) hue-rotate(190deg) brightness(98%) contrast(97%)'}} />
        </div>
      </MentorCard>
      <MentorCard>
        <MentorCardImage backgroundImage={bgImage} />
        <h4 style={{lineHeight: '10px'}}>Name</h4>
        <h4 style={{lineHeight: '10px'}}>Company</h4>
        <h4 style={{lineHeight: '10px'}}>Title</h4>
        <div style={{display: 'flex'}}>
        <img src={process.env.PUBLIC_URL + '/Slack_Mark_Web.png'} style={{width: '48px', height: '48px'}} />
          <img src={process.env.PUBLIC_URL + '/logotype.png'} style={{width: '24px', height: '24px', alignSelf: 'center', filter: 'invert(27%) sepia(87%) saturate(1401%) hue-rotate(190deg) brightness(98%) contrast(97%)'}} />
        </div>
      </MentorCard>
      <MentorCard>
        <MentorCardImage backgroundImage={bgImage} />
        <h4 style={{lineHeight: '10px'}}>Name</h4>
        <h4 style={{lineHeight: '10px'}}>Company</h4>
        <h4 style={{lineHeight: '10px'}}>Title</h4>
        <div style={{display: 'flex'}}>
        <img src={process.env.PUBLIC_URL + '/Slack_Mark_Web.png'} style={{width: '48px', height: '48px'}} />
          <img src={process.env.PUBLIC_URL + '/logotype.png'} style={{width: '24px', height: '24px', alignSelf: 'center', filter: 'invert(27%) sepia(87%) saturate(1401%) hue-rotate(190deg) brightness(98%) contrast(97%)'}} />
        </div>
      </MentorCard>
      <MentorCard>
        <MentorCardImage backgroundImage={bgImage} />
        <h4 style={{lineHeight: '10px'}}>Name</h4>
        <h4 style={{lineHeight: '10px'}}>Company</h4>
        <h4 style={{lineHeight: '10px'}}>Title</h4>
        <div style={{display: 'flex'}}>
        <img src={process.env.PUBLIC_URL + '/Slack_Mark_Web.png'} style={{width: '48px', height: '48px'}} />
          <img src={process.env.PUBLIC_URL + '/logotype.png'} style={{width: '24px', height: '24px', alignSelf: 'center', filter: 'invert(27%) sepia(87%) saturate(1401%) hue-rotate(190deg) brightness(98%) contrast(97%)'}} />
        </div>
      </MentorCard>
      <MentorCard>
        <MentorCardImage backgroundImage={bgImage} />
        <h4 style={{lineHeight: '10px'}}>Name</h4>
        <h4 style={{lineHeight: '10px'}}>Company</h4>
        <h4 style={{lineHeight: '10px'}}>Title</h4>
        <div style={{display: 'flex'}}>
        <img src={process.env.PUBLIC_URL + '/Slack_Mark_Web.png'} style={{width: '48px', height: '48px'}} />
          <img src={process.env.PUBLIC_URL + '/logotype.png'} style={{width: '24px', height: '24px', alignSelf: 'center', filter: 'invert(27%) sepia(87%) saturate(1401%) hue-rotate(190deg) brightness(98%) contrast(97%)'}} />
        </div>
      </MentorCard>
      <MentorCard>
        <MentorCardImage backgroundImage={bgImage} />
        <h4 style={{lineHeight: '10px'}}>Name</h4>
        <h4 style={{lineHeight: '10px'}}>Company</h4>
        <h4 style={{lineHeight: '10px'}}>Title</h4>
        <div style={{display: 'flex'}}>
        <img src={process.env.PUBLIC_URL + '/Slack_Mark_Web.png'} style={{width: '48px', height: '48px'}} />
          <img src={process.env.PUBLIC_URL + '/logotype.png'} style={{width: '24px', height: '24px', alignSelf: 'center', filter: 'invert(27%) sepia(87%) saturate(1401%) hue-rotate(190deg) brightness(98%) contrast(97%)'}} />
        </div>
      </MentorCard>
      </MentorGrid>
    </CenteredContainer>
  )
}


export default withUser(MyMentors);