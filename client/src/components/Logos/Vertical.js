import styled from 'styled-components';


const VerticalLogo = styled.div`
width: 286px;
height: 104px;
background-image: url(${process.env.PUBLIC_URL + '/LogoVertical.png'});
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 768px) {
  width: 224px;
  height: 81px;
}
`

export default VerticalLogo;

