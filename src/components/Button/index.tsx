import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="submit" {...rest}>
    {children}
  </Container>
);

export default Input;
