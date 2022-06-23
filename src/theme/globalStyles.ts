import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  :root{
    font-size: 100%;
    @media screen and (max-width: 750px) {
      font-size:13px;
  }
  }

  html{
    font-family: 'Noto Sans KR', sans-serif;
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font: inherit;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  body{
    font-family: 'Noto Sans KR', sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  a:visited ,
  a:any-link{
    text-decoration: none;
  }

  *:focus {
    outline: none;
  }

  button {
    border: none;
    outline: none;
    text-shadow: none;
    background: none;
    cursor: pointer;
  }
`

export default GlobalStyle
