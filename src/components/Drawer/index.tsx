import React from 'react';
import { FaGithub } from 'react-icons/fa';

import {
  Drawer as DrawerChakra,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  DrawerHeader,
  Image,
  Grid,
  Link,
  Text,
} from '@chakra-ui/react';

import ButtonSettings from '../ButtonSettings';

interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <DrawerChakra isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Image
              src="/favicon.png"
              alt="Pomodoro Timer"
              height="50px"
              width="50px"
            />
          </DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody color="black">
            <Grid templateColumns="50px 1fr" rowGap="20px">
              <ButtonSettings displayText />

              <Link
                href="https://github.com/monteiro-alexandre/pomodoro-timer"
                isExternal
              >
                <Icon
                  as={FaGithub}
                  width="30px"
                  height="30px"
                  cursor="pointer"
                  color="black"
                />
              </Link>

              <Link
                href="https://github.com/monteiro-alexandre/pomodoro-timer"
                isExternal
              >
                <Text alignSelf="center">Repositorio do GitHub</Text>
              </Link>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </DrawerChakra>
  );
};

export default Drawer;
