import styled from 'styled-components';

const HorizontalDisappearingBar = styled.div`
  height: 1px;
  width: 340px;
  
  margin-bottom: 32px;
  align-self: center;
  background-color: lightgrey;
  @media(min-width: 900px) {
    background-color: #ffffff;
  }
`

export default HorizontalDisappearingBar;