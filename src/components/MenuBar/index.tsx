import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { MdSettings, MdSchedule } from 'react-icons/md';

import { Flex, Image, Icon, Tooltip } from '@chakra-ui/react';

import MenuButton from '../MenuButton';

interface MenuBarProps {
  activePage: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ activePage }) => {
  return (
    <Flex
      flexDir="column"
      position="sticky"
      top="0"
      left="0"
      padding="9px 19px 20px"
      height="100%"
      maxHeight="100vh"
      overflowY="auto"
      display={['none', 'flex']}
      borderRightColor="#2F3336"
      borderRightWidth="1px"
    >
      <Image src="/logo.png" marginBottom="20px" alt="Pomodoro Timer" />

      <MenuButton>
        <Tooltip label="Timer" hasArrow placement="right" shouldWrapChildren>
          <Icon
            as={MdSchedule}
            width="30px"
            height="30px"
            color={activePage === 'Timer' ? '#0098f7' : '#a7abae'}
            _hover={{ color: '#0098f7' }}
          />
        </Tooltip>
      </MenuButton>

      <MenuButton>
        <Tooltip label="Tarefas" hasArrow placement="right" shouldWrapChildren>
          <Icon
            as={FaTasks}
            width="30px"
            height="30px"
            color={activePage === 'Tasks' ? '#0098f7' : '#a7abae'}
            _hover={{ color: '#0098f7' }}
          />
        </Tooltip>
      </MenuButton>

      <MenuButton>
        <Tooltip
          label="Configurações"
          hasArrow
          placement="right"
          shouldWrapChildren
        >
          <Icon
            as={MdSettings}
            width="30px"
            height="30px"
            color={activePage === 'Settings' ? '#0098f7' : '#a7abae'}
            _hover={{ color: '#0098f7' }}
          />
        </Tooltip>
      </MenuButton>
    </Flex>
  );
};

export default MenuBar;
