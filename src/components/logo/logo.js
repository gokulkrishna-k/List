import React from 'react';

import { LogoText } from './logo.styles';

export default function Logo({ ...restProps }) {
  return <LogoText {...restProps}>List</LogoText>;
}
