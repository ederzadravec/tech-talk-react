import styled from 'styled-components';
import { theme } from '#/theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${theme.colors.dark};
  font-size: 0.875rem;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 0.75rem;
  border: 1px solid ${({ hasError }) => hasError ? theme.colors.danger : theme.colors.gray300};
  border-radius: ${theme.borderRadius};
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  &::placeholder {
    color: ${theme.colors.gray600};
  }
`;

export const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 0.75rem;
  border: 1px solid ${({ hasError }) => hasError ? theme.colors.danger : theme.colors.gray300};
  border-radius: ${theme.borderRadius};
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  &::placeholder {
    color: ${theme.colors.gray600};
  }
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.danger};
  font-size: 0.875rem;
  margin-top: ${theme.spacing.xs};
`;