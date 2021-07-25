import React from 'react';
import { Container, Title } from './todos-wrapper.styles';

export default function TodosWrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
TodosWrapper.Title = function TodosWrapperTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
