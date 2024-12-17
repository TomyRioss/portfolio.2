import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-6 bg-white  dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Contáctame
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Puedes hablarme por cualquiera de estas plataformas.
            </h5>
            <div className="flex gap-4 mt-6 lg:mb-0 mb-6">
              <a
                className="    h-20 w-20 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                href="https://github.com/TomyRioss"
                target="blank"
              >
                <i>
                  <FaGithub />
                </i>
              </a>
              <a
                className="    h-20 w-20 items-center justify-center align-center   mr-2 "
                href="https://www.linkedin.com/in/tomy-rios/"
                target="blank"
              >
                <i>
                  <FaLinkedin />
                </i>
              </a>
              <a
                className="   h-20 w-20 items-center justify-center align-center  outline-none focus:outline-none mr-2"
                href="https://mail.google.com/mail/u/0/?fs=1&to=tomyrios2006@gmail.com&su=Portfolio&body=Escribe+tu+mensaje+aquí.&tf=cm"
                target="blank"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Links Útiles
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/TomyRioss"
                      target="blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.linkedin.com/in/tomy-rios/recent-activity/all/"
                      target="blank"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Página fuertemente inspirada en el <br />
              </a>
              <a
                href="https://feniapfa.dev/"
                className="text-blueGray-500 hover:text-blueGray-800"
                target="blank"
              >
                Portfolio de Feniapfa
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
