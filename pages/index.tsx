import { Button, Input, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import { Section } from '../components/section';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const submit = () => {
    alert(`My name is ${name} and my email is ${email}.`);
  };
  return (
    <VStack spacing={10}>
      <Heading>Home</Heading>
      <Section title="Title 1" description="Description 1" />
      <Section title="Title 2" description="Description 2" />
      <Section title="Title 3" description="Description 3" />
      <Heading>Count: {count}</Heading>
      <Button onClick={handleClick}>Increase Counter</Button>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button onClick={submit}>Submit</Button>
      <Link href="/hello" passHref>
        <Button as="a">Go to Hello</Button>
      </Link>
    </VStack>
  );
}
