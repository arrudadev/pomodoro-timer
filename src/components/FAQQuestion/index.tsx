import React from 'react';

import { Box, Button, Collapse, useDisclosure } from '@chakra-ui/react';

interface FAQQeustionProps {
  question: string;
  answer: string;
}

const FAQQeustion: React.FC<FAQQeustionProps> = ({ question, answer }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        width={['100%']}
        variant="outline"
        color="#0098f7"
        onClick={onToggle}
        whiteSpace="normal"
        marginBottom="20px"
      >
        {question}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px">{answer}</Box>
      </Collapse>
    </>
  );
};

export default FAQQeustion;
