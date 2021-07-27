import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 24px);
  margin: auto;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow-y: scroll;
  height: auto;

  &::-webkit-scrollbar-track {
    border-radius: 1px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: #cfcfcf;
  }
`;
