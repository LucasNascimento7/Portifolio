import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';
import { useState } from 'react';

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
  background-color: gray;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  z-index: 2;
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

  const [isDarkMode] = useState(false);



  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Nav >
        <NavList>
          <NavItem>
            <NavLink to="/Portifolio">Sobre mim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Portifolio/projects">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Portifolio/contact">Contato</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </ThemeProvider>
  );
};

export default Navbar;
