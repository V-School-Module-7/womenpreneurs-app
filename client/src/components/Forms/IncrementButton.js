import styled from "styled-components";


const IncrementButton = styled.button`
  width: 136px;
  height: 48px;
  margin-bottom: 24px;
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  border: ${props => props.primary ? 'none': '1px solid #C4C4C4'};
  background-color: ${props => props.primary ? "#CDA373" : "#F4F6FA"};
  color: ${props => props.primary ? "#F4F6FA" : "black"};
  align-self: center;
  cursor: pointer;
`;


export default IncrementButton;