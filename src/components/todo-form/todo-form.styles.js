import styled from 'styled-components/macro';

export const Form = styled.form`
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

export const Input = styled.input`
  border: none;
  height: 45px;
  padding: 0px 10px;
  outline: none;
  width: 500px;
  padding-left: 20px;
`;

export const Button = styled.button`
  height: 45px;
  border: none;
  outline: none;
  margin: 0px;
  background-color: var(--primary-color);
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 0px 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;
