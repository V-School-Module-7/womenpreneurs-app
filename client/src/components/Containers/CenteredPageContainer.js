import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`

export default CenteredContainer;