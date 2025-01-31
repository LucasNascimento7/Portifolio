import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { lightTheme, darkTheme } from './styles/themes';
import Navbar from './components/Navbar';


const Button = styled.button`

border: none;
background-color: #808080c7;
border-radius: 5px;
height: 40px;
margin: 20px;
width: 150px;
margin-top: 70px;
position: fixed;
z-index: 2;
`



const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Button onClick={toggleTheme}>
          {isDarkMode ? 'Modo claro' : 'Modo escuro'}
        </Button>
        <Routes>
          <Route path="/Portifolio" element={<Home />} />
          <Route path="/Portifolio/projects" element={<Projects />} />
          <Route path="/Portifolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

