import React from 'react';
import { MdSettings } from 'react-icons/md';

import { Icon, Text, useDisclosure } from '@chakra-ui/react';

import ModalSettings from '../ModalSettings';

interface ButtonSettingsProps {
  displayText?: boolean;
}

const ButtonSettings: React.FC<ButtonSettingsProps> = ({ displayText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        as={MdSettings}
        width="30px"
        height="30px"
        _hover={{ color: 'blue.500' }}
        onClick={onOpen}
      />

      {displayText && (
        <Text alignSelf="center" onClick={onOpen}>
          Configurações
        </Text>
      )}

      <ModalSettings isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ButtonSettings;
