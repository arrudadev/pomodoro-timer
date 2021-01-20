import React, { ChangeEvent, useContext, useState } from 'react';

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
  Switch,
} from '@chakra-ui/react';

import { SettingsContext } from '../../contexts/Settings';

interface ModalSettingsProps {
  onClose: () => void;
  isOpen: boolean;
}

const ModalSettings: React.FC<ModalSettingsProps> = ({ onClose, isOpen }) => {
  const { settings, changeSettings } = useContext(SettingsContext);

  const [pomodoroInterval, setPomodoroInterval] = useState(
    settings.pomodoroInterval,
  );

  const [shortBreakInterval, setShortBreakInterval] = useState(
    settings.shortBreakInterval,
  );

  const [longBreakInterval, setLongBreakInterval] = useState(
    settings.longBreakInterval,
  );

  const [pomodoroSessions, setPomodoroSessions] = useState(
    settings.pomodoroSessions,
  );

  const [autoStartNextRound, setAutoStartNextRound] = useState(
    settings.autoStartNextRound,
  );

  const handlePomodoroIntervalChange = value => setPomodoroInterval(value);
  const handleShortBreakIntervalChange = value => setShortBreakInterval(value);
  const handleLongBreakIntervalChange = value => setLongBreakInterval(value);
  const handlePomodoroSessionsChange = value => setPomodoroSessions(value);

  const handleAutoStartNextRound = (event: ChangeEvent<HTMLInputElement>) => {
    setAutoStartNextRound(event.target.checked);
  };

  const handleRestoreDefault = () => {
    setPomodoroInterval(25);
    setShortBreakInterval(5);
    setLongBreakInterval(15);
    setPomodoroSessions(4);
    setAutoStartNextRound(true);
  };

  const handleSaveSettings = () => {
    changeSettings({
      pomodoroInterval,
      shortBreakInterval,
      longBreakInterval,
      pomodoroSessions,
      autoStartNextRound,
    });

    onClose();
  };

  const handleCancelChanges = () => {
    setPomodoroInterval(settings.pomodoroInterval);
    setShortBreakInterval(settings.shortBreakInterval);
    setLongBreakInterval(settings.longBreakInterval);
    setPomodoroSessions(settings.pomodoroSessions);
    setAutoStartNextRound(settings.autoStartNextRound);

    onClose();
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
            <FormLabel>Sessões</FormLabel>
            <Slider
              value={pomodoroSessions}
              max={8}
              min={1}
              onChange={handlePomodoroSessionsChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb
                fontSize="sm"
                boxSize="32px"
                children={pomodoroSessions}
              />
            </Slider>
          </FormControl>

          <FormLabel htmlFor="auto-start-next-round" mt={4}>
            Iniciar automáticamente a próxima rodada
          </FormLabel>
          <Switch
            id="auto-start-next-round"
            size="lg"
            isChecked={autoStartNextRound}
            onChange={handleAutoStartNextRound}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSaveSettings}>
            Save
          </Button>
          <Button onClick={handleCancelChanges}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSettings;
