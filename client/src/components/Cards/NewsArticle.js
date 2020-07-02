import styled from "styled-components";

const NewsArticle = styled.div`
  display: flex;
  height: 320px;
  margin-bottom: 24px;
  width: 800px;
  @media(max-width: 820px) {
    width: 400px;
    height: 100%;
    flex-direction: column;
  }
`

export default NewsArticle;