import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --blue: #A9C5BA;
    --white: #FFFFFF;
    --gray: #707070;
    --black: #000000;
    --alert: #EC3137;

    font-size: 10px;

    --logo: 800 3.5rem/4.8rem 'Sarabun', sans-serif;
    --head1: 400 3rem/3.8rem 'Mulish', sans-serif;
    --head2: 400 2rem/2.5rem 'Mulish', sans-serif;
    --body: 400 1.6rem/2rem 'Mulish', sans-serif;
    --bodySmall: 400 1.4rem/1.8rem 'Mulish', sans-serif;
    --button: 700 1.6rem/2rem 'Mulish', sans-serif;
    --buttonSocialLogin: 400 1.8rem/2.2rem 'Lato', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--white);
  }

  body, button, input {
    font: var(--body);
    color: var(--black);
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
	list-style: none;
  }

  img, svg {
    display: block;

    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
