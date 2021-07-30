import React, { useState, useContext } from 'react';
import { Categories } from '../components';
import { TodoListContext } from '../context/todo-context';
import { deleteCategory, editCategory } from '../firebase/firebase.utils';

const EditCategoryForm = ({ setshowEditCategory, setShowCategories }) => {
  const { state, dispatch } = useContext(TodoListContext);

  const getCategory = (categoryId) => {
    const filterCat = state.categories.filter(
      (category) => categoryId === category.id
    );
    return filterCat[0];
  };

  const { id, categoryName, color } = getCategory(state.selectedCategory);
  const [editedCategoryColor, setEditedCategoryColor] = useState(color);
  const [editedCategoryName, setEditedCategoryName] = useState(categoryName);

  const handleChange = (e) => {
    setEditedCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedCategoryName === '') return;
    const categoryToEdit = {
      id: id,
      categoryName: editedCategoryName,
      color: editedCategoryColor,
    };
    editCategory(categoryToEdit, state);
    setshowEditCategory(false);
    setShowCategories(true);
  };

  const handleDelete = () => {
    deleteCategory(id, state);
    dispatch({ type: 'SET_CATEGORY', payload: 'All' });
    setshowEditCategory(false);
    setShowCategories(true);
  };

  return (
    <Categories.CategoryForm>
      <Categories.Input
        placeholder='Category name'
        value={editedCategoryName}
        onChange={(e) => handleChange(e)}
        maxLength={15}
        required
      />
      <Categories.ColorPicker
        color={editedCategoryColor}
        onChange={(e) => setEditedCategoryColor(e.hex)}
        disableAlpha
      />
      <Categories.ButtonContainer edit>
        <Categories.Button onClick={handleSubmit}>Save</Categories.Button>
        <Categories.Button onClick={handleDelete}>Delete</Categories.Button>
        <Categories.Button
          onClick={() => {
            setshowEditCategory(false);
            setShowCategories(true);
          }}
        >
          Cancel
        </Categories.Button>
      </Categories.ButtonContainer>
    </Categories.CategoryForm>
  );
};
export default EditCategoryForm;
