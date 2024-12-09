import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Router>
        <nav className="bg-dark-blue  text-white p-10 ">
          <ul className=" flex space-x-8 justify-center font-modern-serif mt-5 ">
            <li>
              <NavLink to="/">
                <h1>HOME</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">SOBRE MI</NavLink>
            </li>
            <li>
              <NavLink to="/">HABILIDADES</NavLink>
            </li>
            <li>
              <NavLink to="/">PROYECTOS</NavLink>
            </li>
          </ul>
        </nav>
      </Router>
    </>
  );
};

export default NavBar;
