import styled from 'styled-components';


const HeroBanner = styled.div`
  background-color: #98BAE9;
  display: block;
  width: 380px;
  height: 160px;
  padding: 15px;
  box-shadow: -20px -20px 0 0px rgb(255, 255, 255, 0.8);
  position: absolute;
  top: 56px;
  left: 56px;
  @media(max-width: 500px) {
    left: 24px;
    top: 32px;
  }
  @media(min-width: 900px) {
    width: 500px;
    height: 280px;
  }
`

export default HeroBanner;