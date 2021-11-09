import styled from 'styled-components/macro';
import LoginBg from '../../../assets/bg-2.svg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${LoginBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--sidebar-color);
  min-height: 100vh;
`;
