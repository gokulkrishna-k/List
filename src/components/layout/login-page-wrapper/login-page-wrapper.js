import React from 'react';
import { Container } from './login-page-wrapper.styles';

export default function LoginPageWrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
