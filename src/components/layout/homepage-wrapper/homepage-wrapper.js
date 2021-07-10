import React from 'react';

import { Container } from './homepage-wrapper.styles';

export default function HomePageWrapper({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
}
