import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 20px);
  margin-bottom: 1rem;
  overflow-y: scroll;
  height: auto;
  padding-right: 8px;
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
