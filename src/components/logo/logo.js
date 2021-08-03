import React from 'react';

import { LogoText } from './logo.styles';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Logo({ ...restProps }) {
  const history = useHistory();

  return (
    <LogoText {...restProps} onClick={() => history.push(ROUTES.LANDING)}>
      List
    </LogoText>
  );
}
