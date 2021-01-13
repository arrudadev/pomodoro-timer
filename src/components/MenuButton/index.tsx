import React from 'react';

import { Flex } from '@chakra-ui/react';

const MenuButton: React.FC = ({ children }) => {
  return (
    <Flex
      Flexshrink="0"
      alignItems="center"
      justifyContent="center"
      padding="8.25px 0"
      cursor="pointer"
    >
      {children}
    </Flex>
  );
};

export default MenuButton;
