import React from 'react';
import { Container } from './todos-wrapper.styles';

export default function TodosWrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
