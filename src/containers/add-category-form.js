import React, { useState, useContext } from 'react';
import { Categories } from '../components';
import { TodoListContext } from '../context/todo-context';

const AddCategoryForm = ({ setshowAddCategory, setShowCategories }) => {
  const { dispatch } = useContext(TodoListContext);

  const [categoryColor, setCategoryColor] = useState('#1665d8');
  const [categoryName, setCategoryName] = useState('');

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName === '') return;
    dispatch({
      type: 'ADD_CATEGORY',
      payload: { categoryName: categoryName, color: categoryColor },
    });
    setCategoryName('');
    setCategoryColor('#1665d8');
    setshowAddCategory(false);
    setShowCategories(true);
  };
  return (
    <Categories.CategoryForm>
      <Categories.Input
        placeholder='Category name'
        value={categoryName}
        onChange={(e) => handleChange(e)}
        maxLength={15}
        required
      />
      <Categories.ColorPicker
        color={categoryColor}
        onChange={(e) => setCategoryColor(e.hex)}
        disableAlpha
      />
      <Categories.ButtonContainer>
        <Categories.Button onClick={handleSubmit}>Add</Categories.Button>
        <Categories.Button
          onClick={() => {
            setshowAddCategory(false);
            setShowCategories(true);
          }}
        >
          Cancel
        </Categories.Button>
      </Categories.ButtonContainer>
    </Categories.CategoryForm>
  );
};

export default AddCategoryForm;
