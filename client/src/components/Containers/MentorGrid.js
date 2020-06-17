import styled from 'styled-components';


const MentorGrid = styled.div`
 display: grid;
 grid-template-columns: 240px 240px 240px;
 grid-template-rows: auto;
 gap: 64px;
 padding-bottom: 48px;
 @media(max-width: 1240px) {
  grid-template-columns: 240px 240px;
  }
  @media(max-width: 720px) {
    grid-template-columns: 240px;
  }
`

export default MentorGrid;