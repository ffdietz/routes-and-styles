import { chakra, Box, Link } from '@chakra-ui/react';

export const NavbarContainer = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    w: 'calc(60vw)',
    h: '5rem',
    right: 0,
    padding: '2rem 1rem',
    textAlign: 'right',
    borderBottom: '1px solid black',
    borderLeft: '1px solid black',
    borderBottomLeftRadius: '50px',
  },
});

export const NavbarLink = chakra(Link, {
  baseStyle: {
    textDecoration: 'none',
    color: 'colors.text.green', // !!!
    margin: '0 40px',
    padding: '0 1.5rem',
    paddingBottom: '1.3rem',
    paddingTop: '0.5rem',
  },
});

// is correct use it as styled components?
// file/folder structure
// call global from theme template
