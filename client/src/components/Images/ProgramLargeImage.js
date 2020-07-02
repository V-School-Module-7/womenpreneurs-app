import styled from 'styled-components';



const ProgramLargeImage = styled.div`
  min-width: 600px;
  min-height: 370px;
  box-shadow: -24px 24px 0 0px #fdecdd;
  background-image: url(${props => props.backgroundImage});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 48px;
  /* @media(min-width: 940px) {
    min-width: 320px;
    min-height: 320px;
  } */
  @media(max-width: 1000px) {
    min-width: 400px;
    min-height: 246px;
    box-shadow: -16px 16px 0 0px #fdecdd;
    margin-left: 16px;
  }
`

export default ProgramLargeImage;