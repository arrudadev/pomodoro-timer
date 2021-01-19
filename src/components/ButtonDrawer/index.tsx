import React from 'react';
import { FaBars } from 'react-icons/fa';

import { Icon, useDisclosure } from '@chakra-ui/react';

import Drawer from '../Drawer';

const ButtonDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        as={FaBars}
        width="30px"
        height="30px"
        _hover={{ color: 'blue.500' }}
        onClick={onOpen}
        display={['block', 'none']}
      />

      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ButtonDrawer;
