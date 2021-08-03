import styled from 'styled-components/macro';

export const LogoText = styled.h1`
  font-family: 'Hammersmith One', sans-serif;
  font-size: 34px;
  padding: 0.5rem 0.5rem;
  margin: 0;
  margin-top: 4px;
  color: var(--primary-text-color);
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 28px;
    padding: 0.4rem 0.4rem;
  }
`;
