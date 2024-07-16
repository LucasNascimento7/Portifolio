import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ProjectCard;
