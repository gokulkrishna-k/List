import React from 'react';

import {
  Container,
  Button,
  Profile,
  Dropdown,
  DropdownItem,
  Text,
  ThemeButton,
} from './header.styles';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.Profile = function HeaderProfile({ displayName, ...restPorps }) {
  return <Profile {...restPorps}>g</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.DropdownItem = function HeaderDropdownItem({ children, ...restProps }) {
  return <DropdownItem {...restProps}>{children}</DropdownItem>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.ThemeButton = function HeaderThemeButton({ theme, ...restProps }) {
  return (
    <ThemeButton {...restProps}>
      {theme === 'light' ? (
        <MoonIcon height='24px' />
      ) : (
        <SunIcon height='24px' />
      )}
    </ThemeButton>
  );
};
