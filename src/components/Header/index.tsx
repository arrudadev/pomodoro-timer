import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import ButtonDrawer from '../ButtonDrawer';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      textAlign="left"
      padding="8px"
    >
      <Heading as="h2" color="gray.500">
        Pomodoro Timer
      </Heading>

      <ButtonDrawer />
    </Flex>
  );
};

export default Header;
