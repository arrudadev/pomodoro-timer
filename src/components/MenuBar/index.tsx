import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';

import { Flex, Image, Icon, Tooltip, Link } from '@chakra-ui/react';

import ButtonSettings from '../ButtonSettings';
import MenuButton from '../MenuButton';

const MenuBar: React.FC = () => {
  return (
    <Flex
      as="nav"
      flexDir="column"
      position="sticky"
      top="0"
      left="0"
      padding="9px 19px 20px"
      height="100%"
      maxHeight="100vh"
      overflowY="auto"
      display={['none', 'flex']}
    >
      <Image src="/logo.png" marginBottom="20px" alt="Pomodoro Timer" />

      <MenuButton>
        <Tooltip label="Timer" hasArrow placement="right" shouldWrapChildren>
          <Icon as={MdSchedule} width="30px" height="30px" color="#0098f7" />
        </Tooltip>
      </MenuButton>

      <MenuButton>
        <Tooltip
          label="Configurações"
          hasArrow
          placement="right"
          shouldWrapChildren
        >
          <ButtonSettings />
        </Tooltip>
      </MenuButton>

      <MenuButton>
        <Tooltip
          label="Pomodoro Timer GitHub"
          hasArrow
          placement="right"
          shouldWrapChildren
        >
          <Link
            href="https://github.com/monteiro-alexandre/pomodoro-timer"
            isExternal
          >
            <Icon
              as={FaGithub}
              width="30px"
              height="30px"
              cursor="pointer"
              _hover={{ color: '#0098f7' }}
            />
          </Link>
        </Tooltip>
      </MenuButton>
    </Flex>
  );
};

export default MenuBar;
