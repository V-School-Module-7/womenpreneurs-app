import styled from 'styled-components';


const HeroBanner = styled.div`
  background-color: #98BAE9;
  display: block;
  width: 350px;
  height: 130px;
  padding: 15px;
  box-shadow: -20px -20px 0 0px #ffffff;
  position: absolute;
  top: 56px;
  left: 56px;
  @media(max-width: 500px) {
    left: 32px;
    top: 32px;
  }
  @media(min-width: 900px) {
    width: 450px;
    height: 230px;
  }
`

export default HeroBanner;