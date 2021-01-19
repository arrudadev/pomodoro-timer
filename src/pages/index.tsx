import React, { useEffect, useState } from 'react';
import {
  FaLaptop,
  FaHeadphones,
  FaCoffee,
  FaPlay,
  FaStop,
  FaRedo,
} from 'react-icons/fa';

import Head from 'next/head';

import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Button,
  Input,
} from '@chakra-ui/react';

import Layout from '../components/Layout';

const Home: React.FC = () => {
  const timerTypes = {
    pomodoro: {
      time: 25,
      color: 'blue.500',
      type: 'pomodoro',
    },
    shortBreak: {
      time: 5,
      color: 'green.500',
      type: 'shortBreak',
    },
    longBreak: {
      time: 15,
      color: 'yellow.500',
      type: 'longBreak',
    },
  };

  const [timerType, setTimerType] = useState(timerTypes.pomodoro);

  const handleTimerTypeChange = (type: string) => {
    setTimerType(timerTypes[type]);
  };

  useEffect(() => {
    handleTimerTypeChange('pomodoro');
  }, []);

  return (
    <>
      <Head>
        <title>Pomodoro Timer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

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
              Short Break
            </Button>
            <Button
              leftIcon={<FaCoffee />}
              variant="ghost"
              color={timerType.type === 'longBreak' ? 'yellow.500' : 'gray.600'}
              _hover={{ color: 'yellow.500' }}
              onClick={() => handleTimerTypeChange('longBreak')}
            >
              Long Break
            </Button>
          </Flex>
          <Flex width="80%" flexWrap="wrap">
            <Flex
              alignItems="center"
              justifyContent="center"
              width={['100%', '100%', '50%']}
            >
              <CircularProgress
                max={timerType.time}
                value={timerType.time}
                size="300px"
                color={timerType.color}
                thickness="2px"
              >
                <CircularProgressLabel>
                  {timerType.time}:00
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
              />

              <Flex
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                marginTop="30px"
              >
                <Button leftIcon={<FaPlay />} variant="ghost" color="blue.500">
                  Start
                </Button>
                <Button leftIcon={<FaStop />} variant="ghost" color="red.500">
                  Stop
                </Button>
                <Button
                  leftIcon={<FaRedo />}
                  variant="ghost"
                  color="yellow.500"
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
