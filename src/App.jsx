import { useState } from 'react';
import NavBar from './components/NavBar';
import './index.css';
import './App.css';
import NameTitle from './components/NameTitle';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './components/AboutMe';

function App() {
  //TODO - Mismo efectos de levantamiento para icono de github y linkedin que el de descargar CV
  // TODO - Arreglar hover de Navbar, sobre todo tema claro.
  return (
    <>
      <div id="header-content">
        <Router>
          <header>
            <NavBar />
          </header>
        </Router>
      </div>
      <div
        id="body-content"
        className="bg-transparent border-1-black drop-shadow-2xl mt-16 flex justify-center"
      >
        <AboutMe />
      </div>
    </>
  );
}

export default App;
