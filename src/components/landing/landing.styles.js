import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    /* display: none; */
  }
  @media (max-width: 740px) {
    /* display: none; */
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
export const ContentContainer = styled.div`
  width: 40%;
  margin: 2rem;
  margin-left: 3rem;
`;

export const Title = styled.h1`
  font-size: 80px;
  font-family: 'Hammersmith One', sans-serif;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  width: 90%;
  font-size: 20px;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  margin-bottom: 4px;
  width: 250px;
  height: 45px;
  border: none;
  border-radius: 3px;
  color: white;
  font-family: 'Poppins', sans-serif;
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

export const Text = styled.p``;
export const Link = styled.a`
  word-spacing: 2px;
  color: var(--primary-color);
  cursor: pointer;
`;

export const ButtonContainer = styled.div``;

export const Image = styled.img`
  width: 60%;
`;
