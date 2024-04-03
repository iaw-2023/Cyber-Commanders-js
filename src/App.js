import { useState,React } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Salas from "./Salas";
import Peliculas from "./Peliculas";
import Navbar from "./Navbar";
import Funciones from "./componentes/Funciones";
import { CartProvider } from "./CartContext";
import Carrito from "./componentes/Carrito";

const url = "https://cyber-commanders-laravel.vercel.app/rest/funciones";

function App() {


  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/salas" element={<Salas />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route
              path="/funciones"
              element={<Funciones state={{ link: url }} />}
            />
            <Route path="/comprarEntrada" element={<Carrito />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
