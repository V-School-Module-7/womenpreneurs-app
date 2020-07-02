import styled from 'styled-components';


const LinkedInButtonLogo = styled.div`
width: 24px;
height: 24px;
background-image: url(${process.env.PUBLIC_URL + '/logotype.png'});
background-repeat: no-repeat;
background-size: contain;
filter: invert(100%) sepia(1%) saturate(21%) hue-rotate(1deg) brightness(104%) contrast(101%);
`

export default LinkedInButtonLogo;