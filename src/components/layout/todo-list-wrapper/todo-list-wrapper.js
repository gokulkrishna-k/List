import React from 'react';

import { Container } from './todo-list-wrapper.styles';

export default function TodoListWrapper({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
}
