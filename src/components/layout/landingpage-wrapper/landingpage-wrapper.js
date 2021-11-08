import React from 'react';
import { Container } from './landingpage-wrapper.styles';

export default function LandingPageWrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
