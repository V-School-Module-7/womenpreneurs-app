import React from 'react';
import CenteredContainer from './components/Containers/CenteredPageContainer'
import HomePageTitle from './components/Titles/HomePageTitle';
import NewsArticle from './components/Cards/NewsArticle';
import ArticleImage from './components/Images/ArticleCardImage';
import HorizontalDisappearingBar from './components/Dividers/HorizontalDisappearingBar';

const AscendaNews = () => {
  let bgImage = 'https://images.squarespace-cdn.com/content/v1/56070012e4b041f4f55d427d/1548790161417-297UMTS9QX5XERR30IVE/ke17ZwdGBToddI8pDm48kCBXEs21Ja0Z623iLCCj7TB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaTd8tncDdU2K9kYh2asHZudedQylmVteCqE50LiRYaEGLDe_BHBL9JV7OZzPTrWmA/wp18.jpg?format=2500w';
  return (
    <CenteredContainer>
    <HomePageTitle>Ascenda News</HomePageTitle>
      <NewsArticle>
        {/* <div style={{display: 'inherit', marginBottom: '18px', alignItems: 'center'}}> */}
        <ArticleImage backgroundImage={bgImage} />
        <div style={{marginLeft: '8px'}}>
          <h4 style={{
            fontSize: '18px', 
             marginLeft: '42px',
             marginTop: '64px',
             }
            }>
            Commodo elementum egestas at gravida id sed pharetra
          </h4>
          {/* </div> */}
          <p style={
            {fontWeight: 'normal', 
            marginLeft: '42px', 
             }
            }>
            Nulla mauris, tellus nam morbi dignissim libero eu tristique sit quam sed sodales aliquet neque nisi nec euismod euismod euismod turpis sem arcu vitae imperdiet facilisi mi aliquet sodales quam tristique sed tincidunt amet, metus quis non in ullamcorper gravida id venenatis, mi facilisis volutpat enim vitae quis orci sed non justo id massa tincidunt non sem bibendum lorem nisl.
          </p>
          <div style={{display: 'flex'}}>
          <p style={
            {fontWeight: 'normal', 
            marginLeft: '42px', 
             }
            }>by Tristique Vel,</p>
          <p style={
            {fontWeight: 'normal', 
            marginLeft: '42px', 
             }
            }>for Ascenda</p>
            </div>
          <p style={{marginLeft: '42px'}}>tags go here</p>
          </div>
      </NewsArticle>
      <HorizontalDisappearingBar />
      <NewsArticle>
        {/* <div style={{display: 'inherit', marginBottom: '18px', alignItems: 'center'}}> */}
        <ArticleImage backgroundImage={bgImage} />
        <div style={{marginLeft: '8px'}}>
          <h4 style={{
            fontSize: '18px', 
            marginTop: '64px',
             marginLeft: '42px'
             }}>
            Commodo elementum egestas at gravida id sed pharetra
          </h4>
          {/* </div> */}
          <p style={
            {fontWeight: 'normal', 
             marginLeft: '42px', 
             }
            }>
            Nulla mauris, tellus nam morbi dignissim libero eu tristique sit quam sed sodales aliquet neque nisi nec euismod euismod euismod turpis sem arcu vitae imperdiet facilisi mi aliquet sodales quam tristique sed tincidunt amet, metus quis non in ullamcorper gravida id venenatis, mi facilisis volutpat enim vitae quis orci sed non justo id massa tincidunt non sem bibendum lorem nisl.
          </p>
          <div style={{display: 'flex'}}>
          <p style={
            {fontWeight: 'normal', 
             marginLeft: '42px', 
             }
            }>by Tristique Vel,</p>
          <p style={
            {fontWeight: 'normal', 
             marginLeft: '42px', 
             }
            }>for Ascenda</p>
            </div>
          <p style={{marginLeft: '42px'}}>tags go here</p>
          </div>
      </NewsArticle>
      <HorizontalDisappearingBar />
      <NewsArticle>
        {/* <div style={{display: 'inherit', marginBottom: '18px', alignItems: 'center'}}> */}
        <ArticleImage backgroundImage={bgImage} />
        <div style={{marginLeft: '8px'}}>
          <h4 style={{
            fontSize: '18px', 
             marginLeft: '42px',
             marginTop: '64px'
             }
            }>
            Commodo elementum egestas at gravida id sed pharetra
          </h4>
          {/* </div> */}
          <p style={
            {fontWeight: 'normal', 
             marginLeft: '42px', 
             }
            }>
            Nulla mauris, tellus nam morbi dignissim libero eu tristique sit quam sed sodales aliquet neque nisi nec euismod euismod euismod turpis sem arcu vitae imperdiet facilisi mi aliquet sodales quam tristique sed tincidunt amet, metus quis non in ullamcorper gravida id venenatis, mi facilisis volutpat enim vitae quis orci sed non justo id massa tincidunt non sem bibendum lorem nisl.
          </p>
          <div style={{display: 'flex'}}>
          <p style={
            {fontWeight: 'normal', 
             marginLeft: '42px', 
             }
            }>by Tristique Vel,</p>
          <p style={
            {fontWeight: 'normal', 
             marginLeft: '42px', 
             }
            }>for Ascenda</p>
            </div>
          <p style={{marginLeft: '42px'}}>tags go here</p>
          </div>
      </NewsArticle>
    </CenteredContainer>
  )
}


export default AscendaNews;