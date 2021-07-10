import React from 'react';

import { Container } from './sidebar-wrapper.styles';

export default function SideBarWrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
