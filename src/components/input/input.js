import React from 'react';
import { StyledInput } from './input.styles';

export default function Input({ ...restProps }) {
  return <StyledInput {...restProps} />;
}
