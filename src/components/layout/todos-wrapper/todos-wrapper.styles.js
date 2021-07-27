import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: calc(100% - 250px);
  padding-top: 1rem;
`;

export const Title = styled.h1`
  margin: 8px 0px;
  margin-left: 12px;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 2px;
`;
