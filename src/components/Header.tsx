import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  text-align: center;
`;

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const Header: React.FC = () => {
  return (
    <HeaderContainer
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.5 }}
    >
      <h1>Meu Portfólio</h1>
    </HeaderContainer>
  );
};

export default Header;
