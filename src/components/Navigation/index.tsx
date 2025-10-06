import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '#/components';
import { Nav, NavContent, NavBrand, NavLinks, NavLink } from './styled';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Nav>
      <Container>
        <NavContent>
          <NavBrand to="/">
            📝 Todo App
          </NavBrand>
          <NavLinks>
            <NavLink 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              📋 Lista
            </NavLink>
            <NavLink 
              to="/create" 
              className={location.pathname === '/create' ? 'active' : ''}
            >
              ✨ Criar
            </NavLink>
          </NavLinks>
        </NavContent>
      </Container>
    </Nav>
  );
};

export default Navigation;