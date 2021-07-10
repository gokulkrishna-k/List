import React from 'react';
import { FolderIcon, HomeIcon, FolderAddIcon } from '@heroicons/react/outline';

import {
  Container,
  Category,
  Icon,
  Text,
  AddCategory,
} from './categories.styles';

export default function Categories({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Categories.All = function CategoriesAll({ ...restProps }) {
  return (
    <Category {...restProps}>
      <HomeIcon width='24px' />
      <Text>All</Text>
    </Category>
  );
};

Categories.Category = function CategoriesCategory({
  categoryName,
  ...restProps
}) {
  return (
    <Category {...restProps}>
      <FolderIcon width='24px' />
      <Text {...restProps}>{categoryName}</Text>
    </Category>
  );
};

Categories.AddCategory = function CategoriesAddCategory({ ...restProps }) {
  return (
    <AddCategory {...restProps}>
      <FolderAddIcon width='24px' />
    </AddCategory>
  );
};
