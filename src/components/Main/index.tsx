import React from 'react';

import { Flex } from '@chakra-ui/react';

const Main: React.FC = ({ children }) => {
  return (
    <Flex as="main" flexDir="column" width={['100%', 'calc(100% - 90px)']}>
      {children}
    </Flex>
  );
};

export default Main;
