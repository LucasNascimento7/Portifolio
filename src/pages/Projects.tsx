import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion'; 

const Container = styled.div`
display: flex;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Section = styled(motion.section)`
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  margin-top: 50px;
  gap: 20px;
  
`;

const H2 = styled.h2`
margin-top: 120px;
`

const A = styled.a`
text-decoration: none;


`

const projects = [
 
  {
    title: 'Burguer',
    description: 'e uma aplicação aonde utilizei alguns recursos do javascript para manipular arrays, onde uso o ForEach, Map, Reduce e Filter, o primeiro botão mostra todas as opções, o segundo dá um desconto de 10% no preço, o terceiro soma o valor total da compra, e o último filtra somente os veganos',
    link: 'https://lucasnascimento7.github.io/Burguer/',
  },
  {
    title: 'Conversor de Moedas',
    description: 'Um conversor de moedas onde se pode converter do real para o dolar, para o euro, ou do dolar para real, ou para o euro, e outras conversões, e o valor do dolar e sempre atualizado de um servidor',
    link: ' https://lucasnascimento7.github.io/Conversor-de-moedas/',
  },
  {
    title: 'Sorteador',
    description: 'uma aplicação de sorteio entre qualquer número',
    link: 'https://lucasnascimento7.github.io/Sorteador/',
  },
  {
    title: 'Em breve mais projetos!',
    description: 'em breve mais projetos seram publicados aqui',
  },
];

const Projects: React.FC = () => {
  return (
    <Container>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <H2>Meus Projetos</H2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <A href={project.link} key={index} target="_blank" rel="noopener noreferrer">
            <ProjectCard title={project.title} description={project.description} />
          </A>
        ))}
      </ProjectsGrid>
      </Section>
    </Container>
  );
};

export default Projects;

