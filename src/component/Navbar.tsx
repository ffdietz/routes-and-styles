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
      <NavbarContainer>
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
