import styled from 'styled-components';

export const Slide = styled.div`
  display: flex;
  flex-direction: column;

  padding: 112px 128px 0;

  h2 {
    margin: 30px auto 20px;

    font: var(--h1);
    color: var(--white);
  }

  p {
    max-width: 560px;
    width: 100%;

    margin: 0 auto 30px;

    text-align: center;
    font: var(--h2);
    color: var(--white);
  }
`;
