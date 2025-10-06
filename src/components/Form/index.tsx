import React from 'react';
import { StyledForm, FormGroup, Label, Input, TextArea, ErrorMessage } from './styled';

// Form Container Component
interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};

// Form Group Component
interface FormGroupProps {
  children: React.ReactNode;
}

export const FormGroupComponent: React.FC<FormGroupProps> = ({ children }) => {
  return <FormGroup>{children}</FormGroup>;
};

// Label Component
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const LabelComponent: React.FC<LabelProps> = ({ children, ...props }) => {
  return <Label {...props}>{children}</Label>;
};

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const InputComponent: React.FC<InputProps> = ({ hasError, ...props }) => {
  return <Input hasError={hasError} {...props} />;
};

// TextArea Component
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const TextAreaComponent: React.FC<TextAreaProps> = ({ hasError, ...props }) => {
  return <TextArea hasError={hasError} {...props} />;
};

// Error Message Component
interface ErrorMessageProps {
  children: React.ReactNode;
}

export const ErrorMessageComponent: React.FC<ErrorMessageProps> = ({ children }) => {
  return <ErrorMessage>{children}</ErrorMessage>;
};

// Export components with better names for external use
export {
  FormGroupComponent as FormGroup,
  LabelComponent as Label,
  InputComponent as Input,
  TextAreaComponent as TextArea,
  ErrorMessageComponent as ErrorMessage
};