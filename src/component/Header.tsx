import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Box marginTop="1rem" marginLeft="2rem">
      <Link to="/">
        <Heading as="h1" size="2xl">
          MovieGuide
        </Heading>
      </Link>
    </Box>
  );
}

export default Header;
