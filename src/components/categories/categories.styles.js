import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Category = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px 10px 10px;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #d2e5ffe8;
  }
`;

export const Text = styled.span`
  padding-left: 0.5rem;
  font-weight: 600;
  margin-top: 2px;
`;

export const AddCategory = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;

  border-radius: 7px;
  width: 200px;
  margin: auto;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 5px;
  background-color: var(--primary-color);
  color: white;
  padding: 7px 10px;
  transition: all 0.1s ease;
  &:hover {
    background: var(--primary-color-hover);
  }
`;
