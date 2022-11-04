import { Button, Heading, HStack, Text } from '@chakra-ui/react';

export interface SectionProps {
  title: string;
  description: string;
}

export function Section({ title, description }: SectionProps) {
  return (
    <>
      <HStack justify="center">
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <Button colorScheme="green">Submit</Button>
      </HStack>
    </>
  );
}
