import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <span className="text-white text-xl font-bold">Logo</span>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/salas"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Salas
              </a>
            </li>
            <li>
              <a
                href="/peliculas"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Peliculas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
