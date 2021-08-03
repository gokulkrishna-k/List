import React, { useContext } from 'react';

import { Container, Group, Button, Burger, ThemeButton } from './header.styles';
import { MoonIcon, SunIcon, MenuIcon } from '@heroicons/react/solid';
import { TodoListContext } from '../../context/todo-context';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Burger = function HeaderBurger({ ...restProps }) {
  return (
    <Burger {...restProps}>
      <MenuIcon height='30px' />
    </Burger>
  );
};

Header.ThemeButton = function HeaderThemeButton({ ...restProps }) {
  const { state, dispatch } = useContext(TodoListContext);
  const toggleTheme = () => {
    dispatch({
      type: 'SET_THEME',
      payload: state.selectedTheme === 'light' ? 'dark' : 'light',
    });
  };
  const theme = state.selectedTheme;
  return (
    <ThemeButton onClick={toggleTheme} {...restProps}>
      {theme === 'light' ? (
        <MoonIcon height='24px' />
      ) : (
        <SunIcon height='24px' />
      )}
    </ThemeButton>
  );
};
