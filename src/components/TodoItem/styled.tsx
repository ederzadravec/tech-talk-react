import styled from 'styled-components';
import { theme } from '#/theme';

export const TodoItemContainer = styled.div<{ completed?: boolean }>`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray200};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
  transition: all 0.2s ease;
  opacity: ${({ completed }) => completed ? 0.7 : 1};
  
  &:hover {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

export const TodoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacing.md};
`;

export const TodoDetails = styled.div`
  flex: 1;
`;

export const TodoTitle = styled.h3<{ completed?: boolean }>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ completed }) => completed ? theme.colors.gray600 : theme.colors.dark};
  margin-bottom: ${theme.spacing.sm};
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

export const TodoDescription = styled.p<{ completed?: boolean }>`
  color: ${({ completed }) => completed ? theme.colors.gray600 : theme.colors.gray800};
  line-height: 1.5;
  margin-bottom: ${theme.spacing.sm};
`;

export const TodoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  font-size: 0.875rem;
  color: ${theme.colors.gray600};
`;

export const TodoActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  min-width: 120px;
`;

export const StatusBadge = styled.span<{ completed?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.25rem;
  background-color: ${({ completed }) => completed ? theme.colors.success : theme.colors.warning};
  color: ${({ completed }) => completed ? theme.colors.white : theme.colors.dark};
`;