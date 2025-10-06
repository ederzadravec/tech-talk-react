import styled from 'styled-components';
import { theme } from '#/theme';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray100};
  padding: ${theme.spacing.xl} 0;
`;

export const PageTitle = styled.h1`
  color: ${theme.colors.dark};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.dark};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: ${theme.spacing.lg};
`;

export const Text = styled.p`
  color: ${theme.colors.gray800};
  line-height: 1.5;
  margin-bottom: ${theme.spacing.md};
`;