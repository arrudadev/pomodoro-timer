import React from 'react';

import { Flex } from '@chakra-ui/react';

import MenuBar from '../MenuBar';

interface LayoutProps {
  activePage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage }) => {
  return (
    <Flex height="100%" width="100%">
      <MenuBar activePage={activePage} />
      {children}
    </Flex>
  );
};

export default Layout;
