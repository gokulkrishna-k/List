import styled from 'styled-components/macro';

export const Container = styled.div`
  border: solid 0px var(--line-color);
  border-right-width: 1px;
  width: 250px;
  height: 100%;
  padding: 0.5rem;
  padding-right: 0px;
  background-color: var(--sidebar-color);
  transition: all 0.2s ease-in-out;
  @media (max-width: 700px) {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  }
`;
