import styled from 'styled-components';


const OuterColumn = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 600px) {
    flex-direction: ${props => props.mentorBox ? 'row' : 'column'};
    padding-right: none;
    padding-left: none;
  }
`

export default OuterColumn;