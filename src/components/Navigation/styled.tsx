import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '#/theme';

export const Nav = styled.nav`
  background: ${theme.colors.white};
  box-shadow: ${theme.boxShadow};
  padding: ${theme.spacing.md} 0;
  margin-bottom: ${theme.spacing.xl};
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBrand = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: #0056b3;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
`;

export const NavLink = styled(Link)`
  color: ${theme.colors.gray800};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.primary};
  }
  
  &.active {
    color: ${theme.colors.primary};
  }
`;