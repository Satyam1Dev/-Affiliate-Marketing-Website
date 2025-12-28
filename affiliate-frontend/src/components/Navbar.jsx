import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 font-semibold transition ${
      isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
    }`;

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <NavLink to="/" className="text-2xl font-bold text-pink-600">
        PickifyHub
      </NavLink>
      <div className="flex space-x-4">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={linkClass}>
          Products
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
