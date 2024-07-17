import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; 

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled(motion.section)`
  margin-bottom: 40px;
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 150px;
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text};
  
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>Sobre Mim</Heading>
        <Text>
          Olá! Eu sou um desenvolvedor full stack com uma paixão por criar
          aplicações web modernas e eficientes. Tenho experiência em várias
          tecnologias, incluindo React, Node.js, e bancos de dados relacionais e
          não relacionais. Adoro aprender novas tecnologias e melhorar
          continuamente minhas habilidades.
        </Text>
      </Section>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Heading>Habilidades</Heading>
        <Text>
          <ul>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>React, Styled Components</li>
            <li>Node.js, Express</li>
            <li>SQL, MongoDB</li>
            <li>Git, GitHub</li>
          </ul>
        </Text>
      </Section>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Heading>Experiência</Heading>
        <Text>
          Durante a minha formação no Dev Club pude vivenciar experiências nas áreas de desenvolvimento de front-end e desenvolvimento de back-end, tais como desenvolver na prática interfaces de usuário, por em prática e traduzir designs do figma para sites, desenvolver APIs, e implementação de software, os resultados podem ser vistos em meus repositórios do GitHub: https://github.com/LucasNascimento7.
        </Text>
       
      </Section>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Heading>Educação</Heading>
        <Text>
          <strong>Dev Club Full Stack Pro</strong><br />
         
        </Text>
      </Section>
    </Container>
  );
};

export default Home;

