import React, { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Text,
} from '@chakra-ui/react';

interface ModalSettingsProps {
  onClose: () => void;
  isOpen: boolean;
}

const ModalSettings: React.FC<ModalSettingsProps> = ({ onClose, isOpen }) => {
  const [pomodoroInterval, setPomodoroInterval] = useState(25);
  const [shortBreakInterval, setShortBreakInterval] = useState(5);
  const [longBreakInterval, setLongBreakInterval] = useState(15);
  const [pomodorosCircle, setPomodorosCircle] = useState(4);

  const handlePomodoroIntervalChange = value => setPomodoroInterval(value);
  const handleShortBreakIntervalChange = value => setShortBreakInterval(value);
  const handleLongBreakIntervalChange = value => setLongBreakInterval(value);
  const handlePomodorosCircleChange = value => setPomodorosCircle(value);

  const handleRestoreDefault = () => {
    setPomodoroInterval(25);
    setShortBreakInterval(5);
    setLongBreakInterval(15);
    setPomodorosCircle(4);
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent color="black">
        <ModalHeader>Configurações</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="18px" fontWeight="bold">
              Intervalos (Minutos)
            </Text>
            <Text onClick={handleRestoreDefault} cursor="pointer">
              Restaurar padrão
            </Text>
          </Flex>
          <FormControl>
            <FormLabel>Pomodoro</FormLabel>
            <Slider
              value={pomodoroInterval}
              max={60}
              min={1}
              onChange={handlePomodoroIntervalChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb
                fontSize="sm"
                boxSize="32px"
                children={pomodoroInterval}
              />
            </Slider>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Pausa curta</FormLabel>
            <Slider
              value={shortBreakInterval}
              max={15}
              min={1}
              onChange={handleShortBreakIntervalChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb
                fontSize="sm"
                boxSize="32px"
                children={shortBreakInterval}
              />
            </Slider>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Pausa Longa</FormLabel>
            <Slider
              value={longBreakInterval}
              max={30}
              min={1}
              onChange={handleLongBreakIntervalChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb
                fontSize="sm"
                boxSize="32px"
                children={longBreakInterval}
              />
            </Slider>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Cliclos de Pomodoros</FormLabel>
            <Slider
              value={pomodorosCircle}
              max={8}
              min={1}
              onChange={handlePomodorosCircleChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb
                fontSize="sm"
                boxSize="32px"
                children={pomodorosCircle}
              />
            </Slider>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSettings;
