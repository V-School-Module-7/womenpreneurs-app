import styled from 'styled-components';


const MentorCardImage = styled.img`
  width: 180px;
  height: 180px; 
  background-image: url(${props => props.backgroundImage});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  border-width: 0;
  @media (min-width: 601px) and (max-width: 900px) {
    width: 140px;
    height: 140px;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 400px) {
    width: 110px;
    height: 110px;
  }
`

export default MentorCardImage;