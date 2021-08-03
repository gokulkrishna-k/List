import React, { useState, useContext } from 'react';
import { Categories } from '../components';
import { TodoListContext } from '../context/todo-context';
import { addCategory } from '../firebase/firebase.utils';

const AddCategoryForm = ({ setshowAddCategory, setShowCategories }) => {
  const { state, dispatch } = useContext(TodoListContext);

  const [categoryColor, setCategoryColor] = useState('#7289da');
  const [categoryName, setCategoryName] = useState('');

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName === '') return;
    const categoryToAdd = { categoryName: categoryName, color: categoryColor };
    addCategory(categoryToAdd, state);
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
