import React from 'react';
import { Link } from 'react-router-dom';

const url = "https://cyber-commanders-laravel.vercel.app/rest/funciones";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <span className="text-white text-xl font-bold">Logo</span>
        </div>
        <div>
          <ul className="flex space-x-4">
            <Link to={"/"}>
            <li>
              <div className="text-white hover:text-gray-300 transition duration-300">
              Inicio
              </div>
            </li>
            </Link>
            <Link to={"/salas"}>
            <li>
              <div className="text-white hover:text-gray-300 transition duration-300">
              Salas
              </div>
            </li>
            </Link>
            <Link to={"/peliculas"}>
            <li>
              <div className="text-white hover:text-gray-300 transition duration-300">
              Peliculas
              </div>
            </li>
            </Link>
            <Link to="/funciones" state={{link: url}}>
            <li>
              <div className="text-white hover:text-gray-300 transition duration-300">
              Funciones
              </div>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
