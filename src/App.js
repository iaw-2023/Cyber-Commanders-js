import React  from 'react';
import {jsx as _jsx} from 'react/jsx-runtime';
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Inicio from './Inicio';
import Salas from './Salas';
import Peliculas from './Peliculas';
import Extras from './Extras';
import Navbar from './Navbar';
import Funciones from './componentes/Funciones';
import ContextProvider from './context/Context';


const url = "https://cyber-commanders-laravel.vercel.app/rest/funciones";

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/salas" element={<Salas />} />
            <Route path="/peliculas"  element={<Peliculas  /> } />
            <Route path="/funciones" element={
              <Funciones  state={{ link: url }}   />
                } />
            <Route path='/extras'  element={<Extras />}  />
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
