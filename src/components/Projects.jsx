import React from 'react';

const Projects = () => {
  return (
    <div
      className="text-black dark:text-white mt-12 bg-transparent dark:bg-black dark:bg-opacity-20 border-4 shadow-2xl drop-shadow-2xl px-11 py-12 border-black mx-52 rounded-lg font-modern-serif"
      id="projects"
    >
      <h3 className="flex mb-20 text-3xl font-modern-serif justify-center font-semibold">
        Proyectos
      </h3>
      <div className="flex flex-wrap justify-center gap-16">
        <div className="flex flex-col justify-center items-center border-4 bg-slate-100 dark:bg-slate-900 border-black rounded-lg shadow-2xl drop-shadow-2xl p-7 w-80">
          <h4 className="mb-5 text-2xl">SleekStyles</h4>
          <img
            src="./assets/sleekstyles.png"
            alt="SleekStyles"
            className="w-45 h-35"
          />
          <ul className="flex flex-wrap mt-9 gap-2">
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-2.5 rounded-2xl">
              React
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-2.5 rounded-2xl">
              Tailwindcss
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-2.5 rounded-2xl">
              Javascript
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-2.5 rounded-2xl">
              Firebase
            </li>
          </ul>
          <p className="mt-5 text-center">
            Proyecto de un ecommerce con React, Firebase y Tailwind,
            inicialmente hecho como trabajo final de mi curso UTN Desarrollo de
            React.
          </p>
          <div className="flex justify-center">
            <a
              className="p-5 bg-cyan-400 rounded-md my-5 mx-2"
              href="https://sleekstyles.vercel.app/"
            >
              DEPLOY
            </a>
            <a
              className="p-5 bg-cyan-400 rounded-md my-5 mx-2"
              href="https://sleekstyles.vercel.app/"
            >
              REPOSITORIO
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-4 bg-slate-100 dark:bg-slate-900 border-black rounded-lg shadow-2xl drop-shadow-2xl p-7 w-80">
          <h4 className="mb-5 text-2xl">SoyFrench</h4>

          <ul className="flex flex-wrap mt-5">
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-3 rounded-2xl">
              HTML
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-3 rounded-2xl">
              CSS
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-3 rounded-2xl">
              PHP
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-3 rounded-2xl">
              SQL
            </li>
          </ul>
          <p className="mt-5 text-center">
            Proyecto de una landing page application hecha con HTML, CSS, PHP y
            SQL para una franquicia de comida rápida ficticia.
          </p>
          <div className="flex justify-center">
            <a
              className="p-5 bg-cyan-400 rounded-md my-5 mx-2"
              href="https://sleekstyles.vercel.app/"
            >
              REPOSITORIO
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-4 bg-slate-100 dark:bg-slate-900 border-black rounded-lg shadow-2xl drop-shadow-2xl p-7 w-80">
          <h4 className="mb-5 text-2xl">Portfolio</h4>
          <img
            src="./assets/portfolio.png"
            alt="SleekStyles"
            className="w-45 h-35"
          />
          <ul className="flex flex-wrap mt-9 gap-2">
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-2.5 rounded-2xl">
              React
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-2.5 rounded-2xl">
              Tailwindcss
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-2.5 rounded-2xl">
              Javascript
            </li>
            <li className="m-2 bg-cyan-700 bg-opacity-70 p-2.5 rounded-2xl">
              Firebase
            </li>
          </ul>
          <p className="mt-5 text-center">
            Proyecto de mi propio portfolio con React y Tailwind, todavía en
            versión temprana, muchos cambios a futuro!.
          </p>
          <div className="flex justify-center">
            <a
              className="p-5 bg-cyan-400 rounded-md my-5 mx-2"
              href="https://tomasrios.vercel.app/"
            >
              DEPLOY
            </a>
            <a
              className="p-5 bg-cyan-400 rounded-md my-5 mx-2"
              href="https://sleekstyles.vercel.app/"
            >
              REPOSITORIO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
