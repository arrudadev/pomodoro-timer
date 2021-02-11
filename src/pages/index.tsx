import React, { useContext, useEffect, useState } from 'react';
import {
  FaLaptop,
  FaHeadphones,
  FaCoffee,
  FaPlay,
  FaStop,
  FaRedo,
} from 'react-icons/fa';

import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Button,
  Input,
} from '@chakra-ui/react';
import useSound from 'use-sound';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { SettingsContext } from '../contexts/Settings';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import defaultSound from '../sounds/default.mp3';
import convertMinutesInSeconds from '../utils/convertMinutesInSeconds';
import formatTimer from '../utils/formatTimer';

const Home: React.FC = () => {
  const { settings } = useContext(SettingsContext);

  const timerTypes = {
    pomodoro: {
      timeInSeconds: convertMinutesInSeconds(settings.pomodoroInterval),
      color: 'blue.500',
      type: 'pomodoro',
    },
    shortBreak: {
      timeInSeconds: convertMinutesInSeconds(settings.shortBreakInterval),
      color: 'green.500',
      type: 'shortBreak',
    },
    longBreak: {
      timeInSeconds: convertMinutesInSeconds(settings.longBreakInterval),
      color: 'yellow.500',
      type: 'longBreak',
    },
  };

  const [timerType, setTimerType] = useState(timerTypes.pomodoro);

  const [timeInSeconds, setTimeInSeconds] = useState(settings.pomodoroInterval);

  const [timerStarted, setTimerStarted] = useState(false);

  const [pomodoroSession, setPomodoroSession] = useState(1);

  const [titleCounter, setTitleCounter] = useState('');

  const [task, setTask] = useLocalStorageState('@pomodorTimer/currentTask', '');

  const [playSound] = useSound(defaultSound);

  const handleTimerTypeChange = (type: string) => {
    setTimerType(timerTypes[type]);
    setTimeInSeconds(timerTypes[type].timeInSeconds);
  };

  const handleTimerStart = () => {
    setTimerStarted(true);
  };

  const handleTimerStop = () => {
    setTimerStarted(false);
  };

  const handleTimerReset = () => {
    setTimerStarted(false);
    setTimeInSeconds(timerType.timeInSeconds);
    setTitleCounter('');
  };

  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  useEffect(() => {
    handleTimerTypeChange('pomodoro');
  }, []);

  useEffect(() => {
    setTimerStarted(false);

    handleTimerTypeChange(timerType.type);
  }, [settings]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStarted) {
        setTimeInSeconds(seconds => {
          let newSeconds = 0;

          if (seconds === 0) {
            newSeconds = 0;
          } else {
            newSeconds = seconds - 1;
          }

          setTitleCounter(formatTimer(newSeconds));

          return newSeconds;
        });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timerStarted]);

  useEffect(() => {
    if (timeInSeconds === 0) {
      playSound();

      if (!settings.autoStartNextRound) {
        setTimerStarted(false);
      }

      if (pomodoroSession < settings.pomodoroSessions) {
        setTimerType(timer => {
          if (timer.type === 'pomodoro') {
            setTimeInSeconds(timerTypes.shortBreak.timeInSeconds);

            return timerTypes.shortBreak;
          }
          if (timer.type === 'shortBreak') {
            setTimeInSeconds(timerTypes.pomodoro.timeInSeconds);
            setPomodoroSession(session => session + 1);

            return timerTypes.pomodoro;
          }
          if (timer.type === 'longBreak') {
            setTimeInSeconds(timerTypes.pomodoro.timeInSeconds);
            return timerTypes.pomodoro;
          }

          return timer;
        });
      } else {
        setPomodoroSession(1);
        setTimeInSeconds(timerTypes.longBreak.timeInSeconds);
        setTimerType(timerTypes.longBreak);
      }
    }
  }, [timeInSeconds]);

  return (
    <>
      <SEO titleCounter={titleCounter} />

      <Layout>
        <Flex
          flexDir="column"
          height="100%"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            marginTop="30px"
          >
            <Button
              leftIcon={<FaLaptop />}
              variant="ghost"
              color={timerType.type === 'pomodoro' ? 'blue.500' : 'gray.600'}
              _hover={{ color: 'blue.500' }}
              onClick={() => handleTimerTypeChange('pomodoro')}
            >
              Pomodoro
            </Button>
            <Button
              leftIcon={<FaHeadphones />}
              variant="ghost"
              color={timerType.type === 'shortBreak' ? 'green.500' : 'gray.600'}
              _hover={{ color: 'green.500' }}
              onClick={() => handleTimerTypeChange('shortBreak')}
            >
              Pausa Curta
            </Button>
            <Button
              leftIcon={<FaCoffee />}
              variant="ghost"
              color={timerType.type === 'longBreak' ? 'yellow.500' : 'gray.600'}
              _hover={{ color: 'yellow.500' }}
              onClick={() => handleTimerTypeChange('longBreak')}
            >
              Pausa Longa
            </Button>
          </Flex>
          <Flex width="80%" flexWrap="wrap">
            <Flex
              alignItems="center"
              justifyContent="center"
              width={['100%', '100%', '50%']}
            >
              <CircularProgress
                max={timerType.timeInSeconds}
                value={timeInSeconds}
                size="300px"
                color={timerType.color}
                thickness="2px"
              >
                <CircularProgressLabel>
                  {formatTimer(timeInSeconds)}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>

            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              width={['100%', '100%', '50%']}
            >
              <Input
                variant="outline"
                placeholder="Digite uma Tarefa"
                maxWidth="450px"
                value={task}
                onChange={handleChangeTask}
              />

              <Flex
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                marginTop="30px"
              >
                <Button
                  leftIcon={<FaPlay />}
                  variant="ghost"
                  color="blue.500"
                  onClick={handleTimerStart}
                >
                  Start
                </Button>
                <Button
                  leftIcon={<FaStop />}
                  variant="ghost"
                  color="red.500"
                  onClick={handleTimerStop}
                >
                  Stop
                </Button>
                <Button
                  leftIcon={<FaRedo />}
                  variant="ghost"
                  color="yellow.500"
                  onClick={handleTimerReset}
                >
                  Reset
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default Home;
