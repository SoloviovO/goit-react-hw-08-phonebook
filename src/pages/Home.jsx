import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box p="20px">
      <Container maxW="container.xl">
        <Text w="220px" fontStyle="italic" fontSize="12" mb="5px" ml="auto">
          “But today not everyone can watch tomorrow. Or rather, not only
          everyone can watch, few people can do it”
        </Text>
        <Text textAlign="end" w="220px" fontSize="12" mb="20px" ml="auto">
          Vitaliy Klychko
        </Text>
        <Container maxW="container.sm">
          <Text textAlign="justify" fontStyle="italic" fontSize="28">
            Hello, this is your PhoneBook. It is designed to help your brain not
            remember numbers, but write them down. Create your own unique
            account and get the opportunity to record your contacts.
          </Text>
        </Container>
      </Container>
    </Box>
  );
};
