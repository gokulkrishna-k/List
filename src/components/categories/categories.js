import React from 'react';
import {
  FolderIcon,
  HomeIcon,
  FolderAddIcon,
  DotsVerticalIcon,
} from '@heroicons/react/solid';
import { ChromePicker } from 'react-color';
import {
  Container,
  Category,
  Text,
  AddCategory,
  ButtonContainer,
  Input,
  Form,
  Button,
  ColorPicker,
} from './categories.styles';

export default function Categories({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Categories.All = function CategoriesAll({ ...restProps }) {
  return (
    <Category {...restProps}>
      <HomeIcon height='30px' />
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
      <FolderIcon className='folder-icon' />
      <Text {...restProps}>{categoryName}</Text>
      <DotsVerticalIcon className='dots' height='20px' />
    </Category>
  );
};

Categories.AddCategory = function CategoriesAddCategory({ ...restProps }) {
  return (
    <AddCategory {...restProps}>
      <FolderAddIcon height='30px' />
      <Text {...restProps}>Add Category</Text>
    </AddCategory>
  );
};

Categories.AddCategoryForm = function CategoriesAddCategoryForm({
  children,
  ...restProps
}) {
  return <Form {...restProps}>{children}</Form>;
};

Categories.ButtonContainer = function CategoriesButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Categories.Input = function CategoriesInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Categories.ColorPicker = function CategoriesColorPicker({ ...restProps }) {
  return (
    <ColorPicker>
      <ChromePicker {...restProps} />
    </ColorPicker>
  );
};
Categories.Button = function CategoriesButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
