import styled from 'styled-components';
import { shade } from 'polished';

export const AlertContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 20;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.64);
  animation: bgOpacity 0.5s;

  @keyframes bgOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  & div {
    background: var(--white);
    padding: 32px 64px;
    border-radius: 5px;
    animation: AlertContentUpToDown 1s;

    @keyframes AlertContentUpToDown {
      from {
        margin-top: -100%;
      }
      to {
        margin-top: 0;
      }
    }

    & > h3 {
      font: var(--h2);
      color: var(--black);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 6%;
  max-width: 960px;
  width: 100%;

  & > a {
    margin-left: auto;
    margin-bottom: 72px;

    font: var(--logo);
    color: var(--black);
  }

  h1 {
    margin-bottom: 88px;

    font: var(--h1);
    color: var(--gray);
  }

  form {
    display: flex;
    flex-direction: column;

    max-width: 432px;
    width: 100%;

    animation: appearFromRight 1s;

    @keyframes appearFromRight {
      from {
        opacity: 0;
        transform: translateX(1%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    & > a {
      margin-left: auto;
      margin-bottom: 30px;

      font: var(--bodySmal);
      color: var(--gray);
    }

    & > .divider {
      display: flex;
      align-items: center;

      margin: 30px auto 30px;

      font: var(--bodySmail);
      color: var(--gray);

      &::after {
        content: '';

        display: block;

        width: 115px;
        height: 0.5px;

        margin-left: 20px;

        background: var(--gray);
      }

      &::before {
        content: '';

        display: block;

        width: 115px;
        height: 0.5px;

        margin-right: 20px;

        background: var(--gray);
      }
    }

    button.buttonSocialGoogle {
      display: flex;
      align-items: center;

      margin: 0 auto;
      padding: 12px 30px;

      background: var(--white);
      border: none;
      border-radius: 100px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      transition: background-color 0.2s;

      font: var(--buttonSocialLogin);

      & svg {
        margin-right: 20px;
      }

      &:hover {
        background: ${shade(0.05, '#fff')};
      }
    }

    & div:last-child {
      margin: 40px auto 0;

      font: var(--bodySmail);
      color: var(--gray);

      a {
        color: var(--blue);
        text-decoration: underline;
      }
    }
  }
`;

export const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: var(--blue);

  @media (max-width: 1024px) {
    & {
      display: none;
    }
  }
`;
