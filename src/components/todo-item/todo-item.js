import React from 'react';
import { Text, DeleteButton, Container } from './todo.styles';

export default function TodoItem({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

TodoItem.Text = function TodoItemText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

TodoItem.DeleteButton = function TodoItemDeleteButton({ ...restProps }) {
  return <DeleteButton {...restProps}>Delete</DeleteButton>;
};
