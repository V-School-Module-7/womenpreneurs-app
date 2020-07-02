import styled from 'styled-components';


const MentorGrid = styled.div`
 display: grid;
 grid-template-columns: 180px 180px 180px;
 grid-template-rows: auto;
 gap: 64px;
 padding-bottom: 88px;
 @media (min-width: 601px) and (max-width: 900px) {
  grid-template-columns: 140px 140px 140px;
  gap: 40px;
  }
  @media(max-width: 600px) {
    grid-template-columns: 120px 120px 120px;
    gap: 18px;
    padding-bottom: 44px;
  }
  @media(max-width: 400px) {
    gap: 2px;
    margin-left: 8px;
    align-self: center;
  }
`

export default MentorGrid;