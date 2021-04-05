import { createGlobalStyle } from 'styled-components';
import github1 from '../assets/github-1.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    background: #F0F0F5 url(${github1}) no-repeat 70% top;
    -webkiy-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
