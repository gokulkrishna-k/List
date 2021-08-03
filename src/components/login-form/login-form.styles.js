import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid 1px var(--line-color);
  background-color: white;
  padding: 4rem 1.3rem;
  border-radius: 2px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: var(--primary-text-color);
  background-color: var(--main-bg-color);
  font-family: 'Poppins', sans-serif;

  @media (max-width: 500px) {
    border: none;
    background-color: transparent;
    width: 100%;
    padding: 3rem 1rem;
  }
`;
export const Title = styled.h1`
  margin: 0;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 38px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 2px solid var(--line-color);
  border-radius: 3px;
  outline: none;
  padding: 0px 10px;
  margin-bottom: 20px;
  transition: all 0.2s ease;
  background-color: var(--primary-input-color);
  color: var(--primary-text-color);

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

  &:disabled {
    opacity: 0.8;

    cursor: not-allowed;
  }
`;
