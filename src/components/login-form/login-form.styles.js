import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid 1px #e4e4e4;

  /* border: 2px solid red; */
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  background-color: white;
  padding: 4rem 1.3rem;
  border-radius: 2px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  font-family: 'Poppins', sans-serif;
`;
export const Title = styled.h1`
  margin: 0;
  margin-bottom: 40px;
  font-weight: 500;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  /* border: 2px solid blue; */
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 2px solid #efefef;
  border-radius: 3px;
  outline: none;
  padding: 0px 10px;
  margin-bottom: 20px;
  transition: all 0.2s ease;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`;

export const Text = styled.p``;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 3px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-color-hover);
  }
`;
