import React from 'react';

import { Box, Grid, Heading, Text } from '@chakra-ui/react';

interface SectionProps {
  title: string;
  subtitle: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <Box
      as="section"
      position="relative"
      width="100%"
      height="max-content"
      padding={['2rem 1.6rem', '2rem 2rem', '2rem 4rem']}
    >
      <Grid
        width="100%"
        height="100%"
        maxWidth={['90rem', '106.8rem', '116.8rem', '130rem']}
        margin="0 auto"
        rowGap={['4.8rem', '6rem']}
        alignContent="start"
      >
        <Box
          as="header"
          textAlign="center"
          maxWidth="60rem"
          margin="0 auto"
          display="grid"
          gridRowGap="2rem"
          alignContent="start"
          position="relative"
        >
          <Heading
            as="h3"
            color="blue.600"
            fontSize={['2.8rem', '2.8rem', '3.2rem']}
            fontWeight="700"
            position="relative"
          >
            {title}
          </Heading>

          <Heading
            as="h4"
            color="gray.500"
            fontSize={['3rem', '4.2rem', '5rem']}
            fontWeight="700"
            zIndex={1}
          >
            {subtitle}
          </Heading>

          <Text fontSize="18px" lineHeight={1.7} textAlign="left">
            {children}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Section;
