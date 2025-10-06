import React from 'react';
import { LoadingSpinner, EmptyState, EmptyStateIcon, EmptyStateText } from './styled';

// Loading Spinner Component
const Loading: React.FC = () => {
  return <LoadingSpinner />;
};

// Empty State Component
interface EmptyStateProps {
  icon?: string;
  title: string;
  children?: React.ReactNode;
}

export const EmptyStateComponent: React.FC<EmptyStateProps> = ({ 
  icon = '📝', 
  title, 
  children 
}) => {
  return (
    <EmptyState>
      <EmptyStateIcon>{icon}</EmptyStateIcon>
      <EmptyStateText>{title}</EmptyStateText>
      {children}
    </EmptyState>
  );
};

export default Loading;