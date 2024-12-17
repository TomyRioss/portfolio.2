import { useState } from 'react';
import NavBar from './components/NavBar';
import './index.css';
import './App.css';
import NameTitle from './components/NameTitle';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  //TODO - Mismo efectos de levantamiento para icono de github y linkedin que el de descargar CV
  //TODO - Dropshadow a la lista del navbar.
  //TODO - Agregar opción cambiar de lenguaje.

  return (
    <>
      <div id="header-content">
        <Router>
          <header>
            <NavBar />
          </header>
        </Router>
      </div>
      <div id="body-content">
        <div className="flex justify-center">
          <AboutMe />
        </div>
        <div className="flex justify-center">
          <Tecnologias id="tecnologies" />
        </div>
        <div className=" justify-center">
          <Projects />
        </div>
        <div className="justify-center mt-24">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
