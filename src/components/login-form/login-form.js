import React from 'react';
import {
  Container,
  Form,
  Title,
  Label,
  Input,
  Button,
  Text,
} from './login-form.styles';
import BeatLoader from 'react-spinners/BeatLoader';

import { ArrowSmRightIcon } from '@heroicons/react/solid';

export default function LoginForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

LoginForm.Form = function LoginFormForm({ children, ...restProps }) {
  return <Form {...restProps}>{children} </Form>;
};

LoginForm.Title = function LoginFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children} </Title>;
};

LoginForm.Label = function LoginFormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children} </Label>;
};

LoginForm.Input = function LoginFormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

LoginForm.Button = function LoginFormButton({
  loading,
  children,
  ...restProps
}) {
  return (
    <Button {...restProps}>
      {loading ? (
        <BeatLoader color='#ffffff' loading={true} size={15} />
      ) : (
        <>
          {children} <ArrowSmRightIcon height='24px' />
        </>
      )}
    </Button>
  );
};

LoginForm.Text = function LoginFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children} </Text>;
};
