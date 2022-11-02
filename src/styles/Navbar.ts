import { chakra, Link, Container } from '@chakra-ui/react';

export const NavbarContainer = chakra(Container, {
  baseStyle: {
    position: 'fixed',
    w: '50vw',
    right: 0,

    padding: '0.5rem 2rem',
    textAlign: 'right',

    borderBottom: '1px solid blbrand.greenack',
    borderLeft: '1px solid brand.green',
    borderBottomLeftRadius: '50px',
  },
});

export const NavbarLink = chakra(Link, {
  baseStyle: {
    textDecoration: 'none',
    color: 'brand.green',
    padding: '0.7rem',
    transition: '600ms ease',
  },
});

// is correct use it as styled components?
// file/folder structure
// call global from theme template
