import { NavLink } from 'react-router-dom';
import { NavbarLinkType } from '../types/types';
import { NavbarContainer, NavbarLink } from '../styles/navbar';

import navbarLinks from '../content/navbarLinks';

function Navbar() {
  const links: NavbarLinkType[] = navbarLinks;

  return (
    <NavbarContainer>
      {links.map((item: NavbarLinkType) => (
        <NavbarLink
          as={NavLink}
          to={item.link}
          end={item.end}
        // className={({ isActive }) => (isActive ? 'navbar-link-text active' : 'navbar-link-text')}
        >
          {item.label}
        </NavbarLink>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
