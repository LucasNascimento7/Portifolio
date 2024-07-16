import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  transition: 0.5s;

  &:hover {
   opacity: 0.6;
    
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Sobre mim</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projetos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contato</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
