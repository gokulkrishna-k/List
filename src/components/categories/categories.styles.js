import styled from 'styled-components/macro';

export const Container = styled.div`
  width: calc(100% - 2px);

  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100% - 125px);
  padding-right: 1px;
  transition: all 0.3s ease;

  &::-webkit-scrollbar-track {
    border-radius: 1px;
    background-color: transparent;
    margin: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #d8d8d8;
    }
  }
`;

export const Category = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 10px;
  border-radius: 2px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;
  ${({ selected, categoryColor }) =>
    selected
      ? `border-left: 4px solid ${categoryColor}; background-color: #d2e5ffe8;`
      : `border-left: 4px solid ${categoryColor}`};

  margin: 10px 0px;

  .folder-icon {
    color: ${({ categoryColor }) => categoryColor || '#172b4d'};
    height: 30px;
  }
  .dots {
    position: absolute;
    top: 50%;
    right: 3px;
    transform: translateY(-50%);
    color: #7c7c7c;
    display: none;
    /* background-color: red; */
    padding: 4px 0px;
  }
  &:hover {
    background-color: #d2e5ffe8;

    .dots {
      display: block;
    }
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
  border-radius: 3px;

  width: calc(100% - 10px);
  cursor: pointer;

  margin-top: 15px;
  margin-bottom: 5px;
  background-color: var(--primary-color);
  color: white;
  padding: 5px 0;
  transition: all 0.2s ease;

  &:hover {
    background: var(--primary-color-hover);
  }
`;

export const Form = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-right: 0.5rem;
`;
export const ButtonContainer = styled.div`
  width: calc(100% - 0.5rem);

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  height: 35px;
`;
export const Input = styled.input`
  box-sizing: border-box;
  height: 35px;
  outline: none;
  border: none;
  border-radius: 2px;
  margin-right: 3px;
  padding: 0px 10px;
  margin-bottom: 10px;
  width: calc(100% - 0.5rem);
`;
export const Button = styled.button`
  width: 49%;
  height: 100%;
  border: none;
  outline: none;
  background-color: var(--primary-color);
  color: #ffffff;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: var(--primary-color-hover);
  }
`;

export const ColorPicker = styled.div`
  background-color: white;
  border-radius: 1px;
  overflow: hidden;
  & > .chrome-picker {
    all: unset;
  }
  width: calc(100% - 0.5rem);
`;
