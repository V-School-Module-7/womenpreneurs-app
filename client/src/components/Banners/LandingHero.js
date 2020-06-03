import styled from 'styled-components';


const LandingHero = styled.div`
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-position: 60% 0%;
  background-repeat: no-repeat;
  @media(min-width: 940px) {
    background-size: 100%;
  }
  @media(max-width: 940px) {
    background-size: 940px;
  }
`

export default LandingHero;