import React, { useContext } from 'react';
import { Logo, Categories, SideBarWrapper } from '../components';
import { TodoListContext } from '../context/todo-context';

const SideBar = ({ ...restProps }) => {
  const { state, dispatch } = useContext(TodoListContext);
  const categories = state.categories;
  const selectedCategory = state.selectedCategory;
  console.log(selectedCategory);

  const handleClick = (category) => {
    if (category === selectedCategory) return;
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  return (
    <SideBarWrapper {...restProps}>
      <Logo />
      <Categories>
        <Categories.All onClick={() => handleClick("All")} />
        {categories.map((category) => (
          <Categories.Category
            key={category.id}
            categoryName={category.categoryName}
            onClick={() => handleClick(category.categoryName)}
          />
        ))}
      </Categories>
      <Categories.AddCategory />
    </SideBarWrapper>
  );
};

export default SideBar;
