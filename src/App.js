import React  from 'react';
import {jsx as _jsx} from 'react/jsx-runtime';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Inicio from './Inicio';
import Salas from './Salas';
import Peliculas from './Peliculas';
import Navbar from './Navbar';
import Funciones from './componentes/Funciones';

const url = "https://cyber-commanders-laravel.vercel.app/rest/funciones";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/peliculas"  element={<Peliculas  /> } />
          <Route path="/funciones" element={<Funciones  state={{ link: url }} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
