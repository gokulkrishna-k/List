import styled from 'styled-components/macro';
import LandingBg from '../../assets/bg-2.svg';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1920px;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${LandingBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 1rem;

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const ContentContainer = styled.div`
  width: 40%;
  margin: 2rem;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    margin-left: 1.5rem;
  }
  @media (max-width: 780px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  font-family: 'Hammersmith One', sans-serif;
  letter-spacing: 2px;
  margin-bottom: 10px;
  @media (max-width: 1000px) {
    font-size: 55px;
  }
  @media (max-width: 780px) {
    font-size: 45px;
  }
`;

export const Info = styled.p`
  width: 90%;
  font-size: 20px;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 780px) {
    width: 75%;
    text-align: center;
  }
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
  @media (max-width: 1000px) {
    width: 230px;
  }
  @media (max-width: 780px) {
    width: 200px;
  }
`;

export const Text = styled.p`
  margin-top: 10px;
`;
export const Link = styled(ReactLink)`
  word-spacing: 2px;
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 60%;
  @media (max-width: 780px) {
    width: 100%;
  }
`;
