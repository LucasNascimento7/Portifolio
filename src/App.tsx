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
background-color: gray;
border-radius: 5px;
height: 40px;
margin: 20px;
width: 150px;


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
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

