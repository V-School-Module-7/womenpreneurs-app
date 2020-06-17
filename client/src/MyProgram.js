import React, { useState, useEffect } from 'react';
import HomePageTitle from './components/Titles/HomePageTitle';
import CenteredContainer from './components/Containers/CenteredPageContainer';
import ProgramCard from './components/Cards/MyProgramCard';
import UnderlinedHeader from './components/Text/UnderlinedHeader';
import ProgramMainImage from './components/Images/ProgramMainImage';
import SecondaryTitle from './components/Titles/SecondaryTitle';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const MyProgram = () => {
  //placeholder until we get real photo access
  let bgImage = 'https://images.squarespace-cdn.com/content/v1/56070012e4b041f4f55d427d/1548790161417-297UMTS9QX5XERR30IVE/ke17ZwdGBToddI8pDm48kCBXEs21Ja0Z623iLCCj7TB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaTd8tncDdU2K9kYh2asHZudedQylmVteCqE50LiRYaEGLDe_BHBL9JV7OZzPTrWmA/wp18.jpg?format=2500w';
  
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let scheduleImages = ['https://images.squarespace-cdn.com/content/v1/56070012e4b041f4f55d427d/1548790161417-297UMTS9QX5XERR30IVE/ke17ZwdGBToddI8pDm48kCBXEs21Ja0Z623iLCCj7TB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaTd8tncDdU2K9kYh2asHZudedQylmVteCqE50LiRYaEGLDe_BHBL9JV7OZzPTrWmA/wp18.jpg?format=2500w', 'https://images.squarespace-cdn.com/content/v1/56070012e4b041f4f55d427d/1548790161417-297UMTS9QX5XERR30IVE/ke17ZwdGBToddI8pDm48kCBXEs21Ja0Z623iLCCj7TB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaTd8tncDdU2K9kYh2asHZudedQylmVteCqE50LiRYaEGLDe_BHBL9JV7OZzPTrWmA/wp18.jpg?format=2500w', 'https://images.squarespace-cdn.com/content/v1/56070012e4b041f4f55d427d/1548790161417-297UMTS9QX5XERR30IVE/ke17ZwdGBToddI8pDm48kCBXEs21Ja0Z623iLCCj7TB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaTd8tncDdU2K9kYh2asHZudedQylmVteCqE50LiRYaEGLDe_BHBL9JV7OZzPTrWmA/wp18.jpg?format=2500w']

  let slides = [];
  for (let i = 0; i < scheduleImages.length; i++) {
    slides.push(
      <Slide key={Math.random() * 6000} index={i} style={{ boxSizing: 'border-box'}}>
        <img src={scheduleImages[i].toString()} style={{height: '294px', width: '380px', border: '3px solid white'}} />
      </Slide>
    )
  }

    console.log('slides', slides)

    let sliderStyles;
    let visibleSlides;
    


    if (slides.length === 1 || windowSize.width <= 720) {
      sliderStyles = {
            width: '385px', height: '310px', marginTop: '30px'
          }
      visibleSlides = 1
    }
    if (slides.length === 2 && windowSize.width > 720 || slides.length >= 2 && windowSize.width > 720 ) {
      sliderStyles = {
            width: '690px', height: '270px', marginTop: '30px'
          }
      visibleSlides = 2
    }
    if (slides.length >= 3 && windowSize.width > 1080) {
      sliderStyles = {
            width: '1035px', height: '270px', marginTop: '30px'
          }
      visibleSlides = 3
    }
    if (slides.length >= 4 && windowSize.width > 1430) {
      sliderStyles = {
          width: '1380px', height: '270px', marginTop: '30px'
        }
      visibleSlides = 4
       
    }

  return (
    <CenteredContainer>
      <HomePageTitle>My Program</HomePageTitle>
      <ProgramCard>
        <div style={{padding: '10px', minWidth: '450px', lineHeight: '1.5rem', fontWeight: 'normal'}}>
          <UnderlinedHeader>
            The Raise
          </UnderlinedHeader>
          <p>
          Ipsum purus vitae aliquam nibh nunc vestibulum posuere id elit, laoreet bibendum ut ut dignissim eget id a arcu ipsum sagittis in habitasse cras tincidunt non enim, nisl, aliquam fermentum volutpat eleifend ultrices donec erat eu scelerisque quisque nisi id pharetra turpis quis purus sed sit suscipit cras fames turpis malesuada turpis lectus id dignissim vel ac vitae erat massa adipiscing sollicitudin ultrices volutpat integer elit sed mauris mi odio curabitur est ut faucibus bibendum condimentum nisi odio in nullam et nulla gravida nec mattis suspendisse
          </p>
        </div>
        <ProgramMainImage backgroundImage={bgImage} />
      </ProgramCard>
      <div style={{ width: '860px', marginBottom: '48px'}}>
        <SecondaryTitle>Schedule</SecondaryTitle>
      </div>
      <CarouselProvider
          naturalSlideWidth={4}
          naturalSlideHeight={3}
          totalSlides={slides.length}
          visibleSlides={visibleSlides}
          touchEnabled={true}
          infinite={true}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
      <div style={{display: 'flex', marginTop: '80px', marginBottom: '60px', height: '250px', alignItems: 'center'}}>
        <ButtonBack>Back</ButtonBack>
          <Slider style={sliderStyles}>
            {slides}
          </Slider>
        <ButtonNext>Next</ButtonNext>
      </div>
      </CarouselProvider>
    </CenteredContainer>
  )
}

export default MyProgram;