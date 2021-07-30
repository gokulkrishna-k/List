import React from 'react';

import { Container, EmptyMessage } from './todo-list-wrapper.styles';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TodoListWrapper({ children, ...restProps }) {
  return (
    <Container
      variants={container}
      initial='hidden'
      animate='show'
      {...restProps}
    >
      {children}
    </Container>
  );
}

TodoListWrapper.EmptyMessage = function TodoListWrapperEmptyMessage({
  children,
  ...restProps
}) {
  return <EmptyMessage {...restProps}>{children}</EmptyMessage>;
};
