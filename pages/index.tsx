import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import { Section } from '../components/section';

export default function Home() {
  const headers = [
    { id: 1203419, name: 'John' },
    { id: 1203411, name: 'John' },
    { id: 12034193, name: 'Sam' }
  ];
  return (
    <VStack spacing={10}>
      <Section title="Title 1" description="Description 1" />
      <Section title="Title 2" description="Description 2" />
      <Section title="Title 3" description="Description 3" />
    </VStack>
  );
}
