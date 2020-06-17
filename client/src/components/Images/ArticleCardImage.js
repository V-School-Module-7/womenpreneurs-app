import styled from 'styled-components';


const ArticleCardImage = styled.image`
  min-width: 240px;
  min-height: 240px;
  align-self: center;
  margin-left: 24px;
  box-shadow: 24px 24px 0 0px rgb(152, 186, 233, 0.8);
  background-image: url(${props => props.backgroundImage});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  /* @media(min-width: 940px) {
    min-width: 320px;
    min-height: 320px;
  } */
  @media(max-width: 940px) {
    margin: 0;
    min-width: 240px;
    min-height: 240px;
    margin-top: 24px;
    box-shadow: 16px 16px 0 0px rgb(152, 186, 233, 0.8);
  }
`

export default ArticleCardImage;