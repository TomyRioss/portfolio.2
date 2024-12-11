import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import NameTitle from './NameTitle';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 py-5 h-13 bg-gray-500 dark:bg-opacity-10 dark:text-white text-center w-full transition-colors duration-300 dark:bg-dark-blue bg-opacity-10 backdrop-blur-3xl z-10">
        <ul className="flex space-x-8 justify-center font-modern-serif mt-3">
          <li className="hover:text-gray-900 dark:hover:text-gray-300 ">
            <NavLink to="/">
              <h1>HOME</h1>
            </NavLink>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-gray-300 ">
            <NavLink to="/">SOBRE MI</NavLink>
          </li>
          <li className="hover:text-gray-900 dark:hover:text-gray-300 ">
            <NavLink to="/">HABILIDADES</NavLink>
          </li>
          <li className="hover:text-cyan-400 dark:hover:text-gray-300 ">
            <NavLink to="/">PROYECTOS</NavLink>
          </li>
          <li>
            <button
              onClick={handleToggleDarkMode}
              className="relative w-6 h-6 transition-opacity duration-300 ease-in-out"
            >
              <SunIcon
                className={`absolute bottom-0 h-7 w-7 transition-opacity duration-300 ease-in-out ${
                  darkMode ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <MoonIcon
                className={`absolute bottom-0 h-7 w-7 transition-opacity duration-300 ease-in-out ${
                  darkMode ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          </li>
        </ul>
      </nav>
      <div>
        <NameTitle darkMode={darkMode} />
      </div>
    </>
  );
};

export default NavBar;
