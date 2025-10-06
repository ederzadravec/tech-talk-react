import styled from 'styled-components';
import { theme } from '#/theme';

export const StyledCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  padding: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.lg};
`;