import styled from 'styled-components';


const ClassMaterialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-self: center;
  margin-bottom: 32px;
  height: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 95vw;
  }
`

export default ClassMaterialsGrid;