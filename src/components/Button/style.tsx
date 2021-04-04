import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  margin: 40px auto 0;
  padding: 12px 60px;
  background: var(--gray);
  border: none;
  border-radius: 100px;
  transition: background-color 0.2s;

  font: var(--button);
  color: var(--white);

  & svg {
    margin-right: 20px;
  }
`;
