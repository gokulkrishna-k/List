import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 10px);
  /* margin: auto; */
  margin-left: 10px;
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

export const EmptyMessage = styled.h3``;
