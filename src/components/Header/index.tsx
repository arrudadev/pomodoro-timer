import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Flex, Heading, Icon, Link } from '@chakra-ui/react';

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
      <Heading as="h2" color="#e3e4e5">
        Pomodoro Timer
      </Heading>

      <Link
        href="https://github.com/monteiro-alexandre/pomodoro-timer"
        isExternal
        display={['none', 'block']}
      >
        <Icon
          as={FaGithub}
          width="30px"
          height="30px"
          cursor="pointer"
          _hover={{ color: '#0098f7' }}
          title="Pomodoro Timer GitHub"
        />
      </Link>

      <ButtonDrawer />
    </Flex>
  );
};

export default Header;
