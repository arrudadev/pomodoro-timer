import React from 'react';
import { FaGithub, FaTasks } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { MdSettings } from 'react-icons/md';

import {
  Drawer as DrawerChakra,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  DrawerHeader,
  Image,
  Text,
  Grid,
  useDisclosure,
  Link,
} from '@chakra-ui/react';

import ModalSettings from '../ModalSettings';

interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

interface DrawerItemProps {
  icon: IconType;
  text: string;
}

const DrawerItem: React.FC<DrawerItemProps> = ({ icon, text }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        as={icon}
        width="30px"
        height="30px"
        cursor="pointer"
        color="black"
        onClick={onOpen}
      />
      <Text alignSelf="center" onClick={onOpen}>
        {text}
      </Text>

      <ModalSettings isOpen={isOpen} onClose={onClose} />
    </>
  );
};

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
              <DrawerItem icon={FaTasks} text="Lista de Tarefas" />

              <DrawerItem icon={MdSettings} text="Configurações" />

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
                  title="Pomodoro Timer GitHub"
                />
              </Link>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </DrawerChakra>
  );
};

export default Drawer;
