import React from 'react';
import { Container, PageWrapper, PageTitle, SectionTitle, Text } from './styled';

// Container Component
interface ContainerProps {
  children: React.ReactNode;
}

export const ContainerComponent: React.FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

// Page Wrapper Component
interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapperComponent: React.FC<PageWrapperProps> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

// Page Title Component
interface PageTitleProps {
  children: React.ReactNode;
}

export const PageTitleComponent: React.FC<PageTitleProps> = ({ children }) => {
  return <PageTitle>{children}</PageTitle>;
};

// Section Title Component
interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitleComponent: React.FC<SectionTitleProps> = ({ children }) => {
  return <SectionTitle>{children}</SectionTitle>;
};

// Text Component
interface TextProps {
  children: React.ReactNode;
}

export const TextComponent: React.FC<TextProps> = ({ children }) => {
  return <Text>{children}</Text>;
};

// Export with better names
export {
  ContainerComponent as Container,
  PageWrapperComponent as PageWrapper,
  PageTitleComponent as PageTitle,
  SectionTitleComponent as SectionTitle,
  TextComponent as Text
};