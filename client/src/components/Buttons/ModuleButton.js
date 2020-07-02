import styled from 'styled-components';

const ModuleButton = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  @media (max-width: 600px) {
    width: 110px;
    height: 110px;
  }
`

export default ModuleButton;