import React from 'react';
import { StyledCard } from './styled';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <StyledCard className={className}>
      {children}
    </StyledCard>
  );
};

export default Card;