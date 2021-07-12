import React from 'react';

import { Container, Title } from './todo-list-wrapper.styles';

export default function TodoListWrapper({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
}

TodoListWrapper.Title = function TodoListWrapperTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};
