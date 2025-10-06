import styled from 'styled-components';
import { theme } from '#/theme';

export const StyledButton = styled.button<{
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => 
    size === 'sm' ? '0.375rem 0.75rem' : 
    size === 'lg' ? '0.75rem 1.5rem' : 
    '0.5rem 1rem'
  };
  font-size: ${({ size }) => 
    size === 'sm' ? '0.875rem' : 
    size === 'lg' ? '1.125rem' : 
    '1rem'
  };
  font-weight: 500;
  border: 1px solid;
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: #0056b3;
            border-color: #0056b3;
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          border-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: #545b62;
            border-color: #545b62;
          }
        `;
      case 'success':
        return `
          background-color: ${theme.colors.success};
          border-color: ${theme.colors.success};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: #1e7e34;
            border-color: #1e7e34;
          }
        `;
      case 'danger':
        return `
          background-color: ${theme.colors.danger};
          border-color: ${theme.colors.danger};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: #c82333;
            border-color: #c82333;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: #0056b3;
            border-color: #0056b3;
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
`;