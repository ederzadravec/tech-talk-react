import React from 'react';
import { StyledAlert } from './styled';

interface AlertProps {
  variant?: 'success' | 'danger' | 'warning' | 'info';
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ variant = 'info', children }) => {
  return (
    <StyledAlert variant={variant}>
      {children}
    </StyledAlert>
  );
};

export default Alert;