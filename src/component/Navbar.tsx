import React from 'react'
import { NavLink } from "react-router-dom";
import { NavbarLink } from '../types/types';

const Navbar = () => {
  const navbarLinks: NavbarLink[] = [
    {
      label: "Home",
      link: "/",
      end: true
    },
    {
      label: "Movie List",
      link: "/movies",
      end: false
    },
    {
      label: "Contact",
      link: "/contact",
      end: true
    },
  ];

  return (
    <div className="navbar-container">
      {navbarLinks.map((item: NavbarLink) => (
        <NavLink
          to={item.link}
          className={({ isActive }) =>
            isActive ? "navbar-link-text active" : "navbar-link-text"
          }
          end={item.end}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;

