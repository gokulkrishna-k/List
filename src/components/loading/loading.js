import React from 'react';
import HashLoader from 'react-spinners/ScaleLoader';
import { Container } from './loading.styles';

export default function Loading({ ...restProps }) {
  return (
    <Container {...restProps}>
      <HashLoader
        color='#7289da'
        width={8}
        height={45}
        margin={4}
        loading={true}
        size={100}
      />
    </Container>
  );
}
