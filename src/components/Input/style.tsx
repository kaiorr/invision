import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.label<ContainerProps>`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;

  font: var(--bodySmall);
  color: var(--gray);

  input {
    margin-top: 4px;
    padding: 12px 20px;

    border: none;
    border-bottom: 1px solid var(--gray);

    transition: all 0.4s;

    &::placeholder {
      opacity: 0.48;
    }
  }

  ${props =>
    props.isFocused &&
    css`
      & {
        color: var(--blue);

        input {
          border-bottom: 1px solid var(--blue);
        }
      }
    `}

  ${props =>
    props.isErrored &&
    css`
      & {
        color: var(--gray);
      }

      & p {
        color: var(--alert);
      }

      &  input {
          border-bottom-color: var(--alert);
        }
      }
    `}
`;
