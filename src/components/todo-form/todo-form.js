import React from 'react';

import { Form, Input, Button } from './todo-form.styles';

export default function TodoForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

TodoForm.Input = function TodoFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

TodoForm.Button = function TodoFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
