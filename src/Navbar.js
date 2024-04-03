import React from "react";
import { Link } from "react-router-dom";

const url = "https://cyber-commanders-laravel.vercel.app/rest/funciones";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between bg-white px-4 py-4">
      <Link to="/">
        <img
          src="https://vxhbrvoxntfzyholqegd.supabase.co/storage/v1/object/public/images/CINELOGO.png"
          className="h-10"
          alt="logo"
        />
      </Link>

      <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:flex lg:w-auto lg:items-center lg:space-x-6">
        <li>
          <Link to="/">
            <p className="text-md text-gray-700 hover:text-gray-900">Inicio</p>
          </Link>
        </li>

        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="current-fill h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link to="/peliculas">
            <p className="text-md text-gray-700 hover:text-gray-900">
              Peliculas
            </p>
          </Link>
        </li>

        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="current-fill h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link to="/funciones" state={{ link: url }}>
            <p className="text-md text-gray-700 hover:text-gray-900">
              Funciones
            </p>
          </Link>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="current-fill h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link to="/salas" titulo="Título del componente">
            <p className="text-md text-gray-700 hover:text-gray-900">Salas</p>
          </Link>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="current-fill h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
