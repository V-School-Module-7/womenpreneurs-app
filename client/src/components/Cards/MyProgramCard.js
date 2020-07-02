import styled from 'styled-components';


const MyProgramCard = styled.div`
  display: flex;
  height: 400px;
  width: 860px;
  margin-bottom: 48px;
  @media(max-width: 1000px) {
    width: 400px;
    height: 100%;
    flex-direction: column-reverse;
  }
`

export default MyProgramCard;