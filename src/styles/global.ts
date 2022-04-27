import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';


export const GlobalStyle = createGlobalStyle`
  :root {
  --background: #eaeaea;

  --gray-100: #e1e1e6;
  --gray-200: #d1d1d3;
  --gray-300: #a8a8b3;
  --gray-900: #121214;


  --cyan-500: #61dafb;
  --blue-100: #F0FFFF;
  --blue-400: #1E90FF;

  --yellow-300: #FFD700;

  --yellow-500: #eba417;


  --red-200: #E10000;
  --red-600: #c72828;

  --green-700: #39b100;
  --green-600: #41c900;

  --black-300: #333;
  --black-800: #23212b;
  --yellow-600: #fecf54

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    f

  button {
    cursor: pointer;
  }
`