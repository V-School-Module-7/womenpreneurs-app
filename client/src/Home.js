import React from 'react';
import Hero from './components/Hero/Hero';
import HeroBanner from './components/Hero/HeroBanner';
import HeroBannerHeader from './components/Hero/HeroBannerHeader';
import HeroBannerSecondary from './components/Hero/HeroBannerSecondary';
import {Link} from 'react-router-dom';

const Home = () => {

  let backgroundImage = 'https://images.squarespace-cdn.com/content/v1/56070012e4b041f4f55d427d/1548790324765-HCEMUHOS37KOCP4HJDFH/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/wp14.jpg?format=2500w'


  return (
    <div>
        <Hero backgroundImage={backgroundImage}>
            <HeroBanner>
              <HeroBannerHeader>
                Ascenda
              </HeroBannerHeader>
              <HeroBannerSecondary>
                A community igniting bold female leadership
              </HeroBannerSecondary>
            </HeroBanner>
        </Hero>
    </div>
  )
}

export default Home;