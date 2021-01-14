import React from 'react';
import { MdSettings } from 'react-icons/md';

import { Icon, useDisclosure } from '@chakra-ui/react';

import ModalSettings from '../ModalSettings';

const ButtonSettings: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        as={MdSettings}
        width="30px"
        height="30px"
        _hover={{ color: '#0098f7' }}
        onClick={onOpen}
      />

      <ModalSettings isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ButtonSettings;
