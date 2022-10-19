import React from 'react'
import { Link } from "react-router-dom";
import { NavbarLink } from '../types/types';

const Navbar = () => {
  const navbarLinks: NavbarLink[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Movie List",
      link: "/movies",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="navbar-container">
      {
        navbarLinks.map((item: NavbarLink) => (
          <Link to={item.link} className="navbar-link-text">
            {item.label}
          </Link>
        ))
      }
    </div>
  );
}

export default Navbar