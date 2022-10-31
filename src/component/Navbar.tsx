import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { NavbarLinkType } from '../types/types';

import { navbarLinks } from '../content/content';
import { NavbarContainer, NavbarLink } from '../styles/navbar';
import Header from './Header';

function Navbar() {
  const links: NavbarLinkType[] = navbarLinks;

  return (
    <Flex>
      <Header />
      <NavbarContainer
        position="fixed"
        w="50vw"
        right="0"
        padding="0.5rem 2rem"
        borderBottom="1px"
        borderLeft="1px"
        borderColor="brand.green"
        borderBottomLeftRadius="50px"
      >
        {links.map((item: NavbarLinkType) => (
          <NavbarLink
            as={NavLink}
            to={item.link}
            end={item.end}
            key={item.label}
            _activeLink={{
              bg: 'brand.green',
              color: 'brand.secondary',
            }}
          >
            {item.label}
          </NavbarLink>
        ))}
      </NavbarContainer>
    </Flex>
  );
}

export default Navbar;
