import { useState } from 'react';
import NavBar from './components/NavBar';
import './index.css';
import NameTitle from './components/NameTitle';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
