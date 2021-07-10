import React from 'react';
import { StyledButton } from './button.styles';

export default function Button({ children, ...restProps }) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}
