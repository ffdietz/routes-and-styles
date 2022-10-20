import { NavbarLinkType } from '../types/types';

const navbarLinks: NavbarLinkType[] = [
  {
    label: 'Home',
    link: '/',
    end: true,
  },
  {
    label: 'Movie List',
    link: '/movies',
    end: false,
  },
  {
    label: 'Contact',
    link: '/contact',
    end: true,
  },
];

export default navbarLinks;
