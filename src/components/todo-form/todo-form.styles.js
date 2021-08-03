import styled from 'styled-components/macro';

export const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: solid 1px var(--line-color);
  width: calc(100% - 24px);
  margin: 10px 12px;
  height: 45px;
`;

export const Input = styled.input`
  border: none;
  height: 100%;
  border-radius: 3px 0px 0px 3px;
  padding: 0px 10px;
  outline: none;
  padding-left: 10px;
  width: calc(100% - 150px);
  background-color: var(--primary-input-color);
  color: var(--primary-text-color);
  @media (max-width: 500px) {
    width: calc(100% - 105px);
  }
`;

export const Button = styled.button`
  height: 45px;
  width: 150px;
  border: none;
  margin: 0px;
  background-color: var(--primary-color);
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 0px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 0px 3px 3px 0px;

  &:hover {
    background-color: var(--primary-color-hover);
  }

  @media (max-width: 500px) {
    width: 105px;
    font-size: 15px;
    font-weight: 600;
    padding: 0px 10px;
  }
`;
