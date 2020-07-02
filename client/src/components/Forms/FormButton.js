import styled from "styled-components";


const FormButton = styled.button`
  width: 136px;
  height: 48px;
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  border: ${props => props.primary ? '1px solid #F4F6FA' : '1px solid #c2a0a0'};
  background-color: ${props => props.primary ? "#CDA373" : "#c2a0a0"};
  color: ${props => props.primary ? "#F4F6FA" : "#F4F6FA"};
  align-self: center;
  cursor: pointer;
  margin-bottom: 24px;
  :hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.10);
  }
`;


export default FormButton;