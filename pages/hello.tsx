import {
  Button,
  Input,
  Heading,
  HStack,
  Text,
  VStack,
  Stack
} from '@chakra-ui/react';

import { Section } from '../components/section';
import { useState } from 'react';
import Link from 'next/link';

export default function Hello() {
  return (
    <Stack>
      <Heading>Hello</Heading>
      <Text>Hello page</Text>
      <Link href="/" passHref>
        <Button as="a">Go to Home</Button>
      </Link>
    </Stack>
  );
}
