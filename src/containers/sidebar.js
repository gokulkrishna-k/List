import React from 'react';
import { Logo, Categories, SideBarWrapper } from '../components';

const SideBar = ({ ...restProps }) => {
  return (
    <SideBarWrapper>
      <Logo />
      <Categories>
        <Categories.All />
        <Categories.Category categoryName='Work' />
        <Categories.Category categoryName='Projects' />
        <Categories.Category categoryName='Anime' />
      </Categories>
      <Categories.AddCategory />
    </SideBarWrapper>
  );
};

export default SideBar;
