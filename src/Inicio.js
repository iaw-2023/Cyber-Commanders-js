import React from "react";
import { Link } from "react-router-dom";
import "./CSS/inicio.css";

const url = "https://cyber-commanders-laravel.vercel.app/rest/funciones";

export default function Inicio() {
  return (
    <div className="container bg-gray-600">
      <div id="salas" className="section">
        <div className="content text-center">
          <h1 className="text-2xl">Salas</h1>
          <p className="text-gray-100">
            Hace click aca para ver nuestras salas
          </p>
          <Link to="/salas"className="inline-flex relative top-20">
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              Ver Salas
            </span>
            <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                focusable="false"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="overlay" />
      </div>
      <div id="peliculas" className="section">
        <div className="content text-center">
          <h1 className="text-2xl">Peliculas</h1>
          <p className="text-gray-100">
            Busca tus pelis favoritas presionando aqui
          </p>
          <Link to="/peliculas" className="inline-flex relative top-20" >
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              Ver Peliculas
            </span>
            <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                focusable="false"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="overlay" />
      </div>
      <div id="funciones" className="section">
        <div className="content text-center">
          <h1 className="text-2xl">Funciones</h1>
          <p className="text-gray-100">
            Conoce todas las funciones que tenemos para vos
          </p>
          <Link to="/funciones"  state={{ link: url }} className="inline-flex relative top-20" >
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              Ver funciones
            </span>
            <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                focusable="false"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="overlay" />
      </div>
    </div>
  );
}
