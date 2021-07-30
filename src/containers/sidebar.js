import React, { useState, useContext } from 'react';
import { Logo, Categories, SideBarWrapper } from '../components';
import { TodoListContext } from '../context/todo-context';
import AddCategoryForm from './add-category-form';
import EditCategoryForm from './edit-category-form';

const SideBar = ({ ...restProps }) => {
  // context
  const { state, dispatch } = useContext(TodoListContext);
  const { categories, selectedCategory } = state;

  // State
  const [showCategories, setShowCategories] = useState(true);
  const [showAddCategory, setshowAddCategory] = useState(false);
  const [showEditCategory, setshowEditCategory] = useState(false);

  // Set selected Category
  const handleClick = (category) => {
    if (category === selectedCategory) return;
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  return (
    <SideBarWrapper {...restProps}>
      <Logo />
      {showCategories && (
        <>
          <Categories>
            <Categories.All
              onClick={() => handleClick('All')}
              selected={selectedCategory === 'All' ? true : false}
            />
            {categories.map((category) => (
              <Categories.Category
                key={category.id}
                categoryName={category.categoryName}
                categoryColor={category.color}
                selected={category.id === selectedCategory ? true : false}
                onClick={() => handleClick(category.id)}
                onEdit={() => {
                  setshowEditCategory(true);
                  setShowCategories(false);
                }}
              />
            ))}
          </Categories>
          <Categories.AddCategory
            onClick={() => {
              setShowCategories(false);
              setshowAddCategory(true);
            }}
          />
        </>
      )}
      {showAddCategory && (
        <AddCategoryForm
          setshowAddCategory={setshowAddCategory}
          setShowCategories={setShowCategories}
        />
      )}
      {showEditCategory && (
        <EditCategoryForm
          setshowEditCategory={setshowEditCategory}
          setShowCategories={setShowCategories}
        />
      )}
    </SideBarWrapper>
  );
};

export default SideBar;
