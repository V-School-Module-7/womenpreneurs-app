import styled from 'styled-components';

const CenterColumn = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #93aed4;
  border-left: 1px solid #93aed4;
  box-sizing: border-box;
  @media (max-width: 600px) {
    border-right: none;
    border-left: none;
    border-top: 1px solid #93aed4;
    border-bottom: 1px solid #93aed4;
  }
`

export default CenterColumn;