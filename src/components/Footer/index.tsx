import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      width="100%"
      minHeight="6.4rem"
      textAlign="center"
      position="relative"
      marginTop="50px"
    >
      <Flex
        flexDir="column"
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box as="span" marginBottom="10px">
          Pomodoro Timer © 2021
        </Box>

        <Text marginBottom="10px">
          Desenvolvido e mantido por Alexandre Monteiro
        </Text>

        <Flex
          alignItems="center"
          justifyContent="center"
          marginBottom="50px"
          flexWrap="wrap"
        >
          <Link
            href="https://github.com/monteiro-alexandre"
            isExternal
            margin="10px"
          >
            <Icon
              as={FaGithub}
              width="30px"
              height="30px"
              cursor="pointer"
              _hover={{ color: 'blue.500' }}
              title="Alexandre Monteiro GitHub"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/monteiro-alexandre/"
            isExternal
            margin="10px"
          >
            <Icon
              as={FaLinkedin}
              width="30px"
              height="30px"
              cursor="pointer"
              _hover={{ color: 'blue.500' }}
              title="Alexandre Monteiro Linkedin"
            />
          </Link>

          <Link
            href="https://twitter.com/ale_monteiro14"
            isExternal
            margin="10px"
          >
            <Icon
              as={FaTwitter}
              width="30px"
              height="30px"
              cursor="pointer"
              _hover={{ color: 'blue.500' }}
              title="Alexandre Monteiro Twitter"
            />
          </Link>

          <Link
            href="mailto:alexandre.monteiro.bec@gmail.com"
            isExternal
            margin="10px"
          >
            <Icon
              as={FaEnvelope}
              width="30px"
              height="30px"
              cursor="pointer"
              _hover={{ color: 'blue.500' }}
              title="Alexandre Monteiro Gmail"
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
