import styled from 'styled-components';
import { theme } from '#/theme';

export const StyledAlert = styled.div<{ variant?: 'success' | 'danger' | 'warning' | 'info' }>`
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius};
  margin-bottom: ${theme.spacing.lg};
  
  ${({ variant }) => {
    switch (variant) {
      case 'success':
        return `
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
        `;
      case 'danger':
        return `
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          color: #721c24;
        `;
      case 'warning':
        return `
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          color: #856404;
        `;
      case 'info':
        return `
          background-color: #d1ecf1;
          border: 1px solid #b8daff;
          color: #0c5460;
        `;
      default:
        return `
          background-color: #d1ecf1;
          border: 1px solid #b8daff;
          color: #0c5460;
        `;
    }
  }}
`;