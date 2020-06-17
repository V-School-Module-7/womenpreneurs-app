import styled from 'styled-components';


const ProgramMainImage = styled.image`
  min-width: 400px;
  min-height: 330px;
  align-self: center;
  margin-left: 24px;
  box-shadow: 32px 32px 0 0px #fdecdd;
  background-image: url(${props => props.backgroundImage});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  /* @media(min-width: 940px) {
    min-width: 320px;
    min-height: 320px;
  } */
  @media(max-width: 1000px) {
    margin: 0;
    min-width: 380px;
    min-height: 320px;
    margin-top: 24px;
    box-shadow: 24px 24px 0 0px #fdecdd;
  }
`

export default ProgramMainImage;