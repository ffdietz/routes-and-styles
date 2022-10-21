import { Box, Heading } from '@chakra-ui/react';
import NavigateBar from './NavigateBar';

function Header() {
  return (
    <Box marginTop="4rem" marginLeft="2rem">
      <Heading as="h1" size="2xl">Movies Guide</Heading>
      <NavigateBar />
    </Box>
  );
}

export default Header;
