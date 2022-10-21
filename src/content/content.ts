import { MovieType, NavbarLinkType } from '../types/types';

export const navbarLinks: NavbarLinkType[] = [
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

export const movies: MovieType[] = [
  {
    title: 'movie_A',
  },
  {
    title: 'movie_B',
  },
  {
    title: 'movie_C',
  },
  {
    title: 'movie_D',
  },
  {
    title: 'movie_E',
  },
];
