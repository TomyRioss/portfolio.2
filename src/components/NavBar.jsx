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
      <nav className="fixed top-0 left-0 py-5 h-13 bg-gray-500 dark:bg-opacity-10 dark:text-white text-center w-full transition-colors duration-300 dark:bg-blue-900 bg-opacity-10 backdrop-blur-3xl drop-shadow-2xl shadow-2xl z-10">
        <ul className="flex space-x-8 justify-center font-modern-serif mt-3">
          <li className="hover:text-cyan-400 dark:hover:text-gray-300 ">
            <a href="#main">
              <h1>HOME</h1>
            </a>
          </li>
          <li className="hover:text-cyan-400 dark:hover:text-gray-300 ">
            <a href="#aboutMe">SOBRE MI</a>
          </li>
          <li className="hover:text-cyan-400 dark:hover:text-gray-300 ">
            <a href="#tecnologies">HABILIDADES</a>
          </li>
          <li className="hover:text-cyan-400 dark:hover:text-gray-300 ">
            <a href="#projects">PROYECTOS</a>
          </li>
          <li>
            <button
              onClick={handleToggleDarkMode}
              className="relative w-6 h-6 transition-opacity duration-300 ease-in-out hover:text-cyan-400"
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
