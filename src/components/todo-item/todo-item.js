import React from 'react';
import { Text, DeleteButton, Container } from './todo-item.styles';
import { TrashIcon, XCircleIcon } from '@heroicons/react/solid';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export default function TodoItem({ children, categoryColor, ...restProps }) {
  return (
    <Container variants={item} categoryColor={categoryColor} {...restProps}>
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
