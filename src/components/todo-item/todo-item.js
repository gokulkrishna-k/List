import React from 'react';
import { Text, DeleteButton, Container } from './todo-item.styles';
import { TrashIcon, XCircleIcon } from '@heroicons/react/solid';

export default function TodoItem({ children, categoryColor, ...restProps }) {
  return (
    <Container categoryColor={categoryColor} {...restProps}>
      {children}
    </Container>
  );
}

TodoItem.Text = function TodoItemText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

TodoItem.DeleteButton = function TodoItemDeleteButton({ ...restProps }) {
  return (
    <DeleteButton {...restProps}>
      <XCircleIcon height='30px' />
    </DeleteButton>
  );
};
