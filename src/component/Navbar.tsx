import { NavLink } from 'react-router-dom';
import { NavbarLinkType } from '../types/types';
import { NavbarContainer, NavbarLink } from '../styles/navbar';

import { navbarLinks } from '../content/content';

function Navbar() {
  const links: NavbarLinkType[] = navbarLinks;

  return (
    <NavbarContainer>
      {links.map((item: NavbarLinkType) => (
        <NavbarLink
          as={NavLink}
          end={item.end}
          to={item.link}
          _activeLink={{
            bg: 'green.200',
            color: 'White',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        >
          {item.label}
        </NavbarLink>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
