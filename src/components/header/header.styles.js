import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: solid 1px var(--line-color);
  /* box-shadow: 0px 3px 12px 0px rgba(164, 164, 164, 0.87);
  -webkit-box-shadow: 0px 3px 12px 0px rgba(164, 164, 164, 0.87);
  -moz-box-shadow: 0px 3px 12px 0px rgba(164, 164, 164, 0.87); */
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 0.6rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;

export const Profile = styled.div``;

export const Dropdown = styled.div``;

export const DropdownItem = styled.div``;

export const Text = styled.span``;

export const Burger = styled.div``;
