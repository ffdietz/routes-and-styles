import { chakra, Link, Container } from '@chakra-ui/react';

export const NavbarContainer = chakra(Container, {
  baseStyle: {
    position: 'fixed',
    w: '45vw',
    right: 0,

    padding: ' 0.5rem 2rem',
    textAlign: 'right',

    borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    borderBottomLeftRadius: '50px',
  },
});

export const NavbarLink = chakra(Link, {
  baseStyle: {
    textDecoration: 'none',
    color: 'green.500',
    marginRight: [3],
    transition: '600ms ease',
  },
});

// is correct use it as styled components?
// file/folder structure
// call global from theme template
