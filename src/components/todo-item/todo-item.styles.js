import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  /* padding: 2px 5px; */
  border: 0;
  background-color: transparent;
  color: #94979a;
  cursor: pointer;
  transition: all 0.2s ease;
  &:focus {
    opacity: 1;
  }
  &:hover {
    color: #74797f;
  }
`;

export const Container = styled(motion.div)`
  width: calc(100% - 8px);
  background-color: var(--todo-item-color);
  border: solid 1px var(--line-color);
  border-left: solid 6px ${({ categoryColor }) => categoryColor};
  border-radius: 2px;

  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.2); */
  margin: 0.5rem 0rem;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    ${DeleteButton} {
      opacity: 1;
    }
  }
`;

export const Text = styled.h4`
  margin: 0px;
  width: calc(100% - 50px);
  overflow-wrap: break-word;
  line-height: 1.65;
  font-family: 'Open Sans', sans-serif;
`;
