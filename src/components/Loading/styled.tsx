import styled from 'styled-components';
import { theme } from '#/theme';

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xxl};
  
  &::after {
    content: "";
    width: 2rem;
    height: 2rem;
    border: 2px solid ${theme.colors.gray300};
    border-top-color: ${theme.colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl};
  color: ${theme.colors.gray600};
`;

export const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.5;
`;

export const EmptyStateText = styled.p`
  font-size: 1.125rem;
  margin-bottom: ${theme.spacing.lg};
`;