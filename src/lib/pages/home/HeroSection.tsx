import * as React from 'react';
import { Container, chakra, Stack, Text, Button, Box } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <Container p={{ base: 8, sm: 14 }}>
      <Stack height="90vh" alignItems="center" display="grid">
        <Box py={2} px={3} bg="teal" w={["100%", "80%", "60%"]} color="white" rounded="md" fontSize="sm">
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Text fontWeight="bold">Ready, Set, Build! 🚀</Text>
            <Text>Join the Hackathon!</Text>
          </Stack>
        </Box>
        <chakra.h1
          fontSize={{ base: '4xl', sm: '5xl' }}
          fontWeight="bold"
          textAlign="center"
          maxW={["100%", "80%", "60%"]}
        >
          Create accessible React apps with speed!
        </chakra.h1>
        <Text fontSize={{ base: "md", md: "xl" }} color="description">
          Chakra UI is a simple, modular and accessible component library that gives you the
          building blocks you need to build your React applications.
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          w={["100%", "80%", "60%"]}
          spacing={5}
        >
          <Button
            colorScheme="teal"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
          >
            Get Started
          </Button>
          <Button
            leftIcon={<FaGithub />}
            colorScheme="gray"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
          >
            Github
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;