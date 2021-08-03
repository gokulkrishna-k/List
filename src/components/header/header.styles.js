import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: solid 1px var(--line-color);
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  font-family: 'Poppins', sans-serif;
  width: 110px;
  height: 32px;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeButton = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 3px;
  transition: all 0.3s ease;
  color: var(--primary-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--line-color);
  }
`;

export const Burger = styled.button`
  display: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--primary-text-color);

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
