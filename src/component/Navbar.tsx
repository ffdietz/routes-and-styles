import { NavLink } from 'react-router-dom';
import { Container, Flex, Link } from '@chakra-ui/react';
import { NavbarLinkType } from '../types/types';

import { navbarLinks } from '../content/content';
import Header from './Header';

function Navbar() {
  const links: NavbarLinkType[] = navbarLinks;

  return (
    <Flex>
      <Header />
      <Container
        position="fixed"
        w="50vw"
        right="0"
        padding="0.5rem 0"
        paddingLeft="6rem"
        borderBottom="1px"
        borderLeft="1px"
        borderColor="brand.green"
        borderBottomLeftRadius="50px"
      >
        {links.map((item: NavbarLinkType) => (
          <Link
            as={NavLink}
            to={item.link}
            end={item.end}
            key={item.label}
            textDecoration="none"
            color="brand.green"
            padding="0.7rem"
            transition="600ms ease"
            _activeLink={{
              bg: 'brand.green',
              color: 'brand.secondary',
            }}
          >
            {item.label}
          </Link>
        ))}
      </Container>
    </Flex>
  );
}

export default Navbar;
