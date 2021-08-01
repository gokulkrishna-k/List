import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
--primary-text-color: ${({ theme }) => theme.primaryTextColor};
  --primary-color:  ${({ theme }) => theme.primaryColor};
  --primary-color-hover: ${({ theme }) => theme.primaryColorHover} ;
  --sidebar-color: ${({ theme }) => theme.sidebarColor} ;
  --category-color: ${({ theme }) => theme.categoryColor} ;
  --categoy-select:  ${({ theme }) => theme.categorySelect};
  --main-bg-color:  ${({ theme }) => theme.mainBgColor};
  --todo-item-color:  ${({ theme }) => theme.todoItemColor};
  --line-color:  ${({ theme }) => theme.lineColor};
  --primary-input-color:  ${({ theme }) => theme.primaryInputColor};
  }
  `;
