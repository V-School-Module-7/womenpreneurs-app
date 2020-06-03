import React from "react";
import { withRouter } from "react-router-dom";
import Hero from './components/Hero/Hero';
import HeroHeader from './components/Hero/HeroHeader';
import HeroSecondary from './components/Hero/HeroSecondary';
// import { withUser } from "./context/UserProvider";


const Landing = props => {

  let backgroundImage = 'https://images.squarespace-cdn.com/content/v1/56070012e4b041f4f55d427d/1548790324765-HCEMUHOS37KOCP4HJDFH/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/wp14.jpg?format=2500w'

  return (
      <Hero backgroundImage={backgroundImage}>
        <HeroHeader>
          Welcome To Ascenda
        </HeroHeader>
        <HeroSecondary>
          A community igniting bold female leadership
        </HeroSecondary>
      </Hero>
  );
};

export default withRouter(Landing);