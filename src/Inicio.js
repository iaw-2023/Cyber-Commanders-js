import React from "react";
import { Link } from "react-router-dom";
import inicio from "./CSS/inicio.module.css";

const url = "https://cyber-commanders-laravel.vercel.app/rest/funciones";

export default function Inicio() {
  return (
    <div className={inicio.container}>
      <div
        id={inicio.salas}
        className={inicio.section}
        onClick={() => {
          window.location.href = "/salas";
        }}
        role="button"
        aria-label="Ver salas de cine"
        tabIndex={0}
      >
        <div className={inicio.content}>
          <h1 className="text-2xl">Salas</h1>
          <p className="text-gray-100">
            Hace click acá para ver nuestras salas
          </p>
          <Link
            to="/salas"
            className={"inline-flex relative top-20 " + inicio.btn}
            aria-label="Ver salas disponibles"
          >
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              Ver Salas
            </span>
            <span
              className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-white hover:bg-black hover:text-white transition duration-500 ease-in-out"
              aria-hidden="true"
            >
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
        <div className={inicio.overlay} />
      </div>

      <div
        id={inicio.peliculas}
        className={inicio.section}
        onClick={() => {
          window.location.href = "/peliculas";
        }}
        role="button"
        aria-label="Ver películas disponibles"
        tabIndex={0}
      >
        <div className={inicio.content}>
          <h1 className="text-2xl">Películas</h1>
          <p className="text-gray-100">
            Busca tus pelis favoritas presionando aquí
          </p>
          <Link
            to="/peliculas"
            className={"inline-flex relative top-20 " + inicio.btn}
            aria-label="Ver películas"
          >
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              Ver Películas
            </span>
            <span
              className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-white hover:bg-black hover:text-white transition duration-500 ease-in-out"
              aria-hidden="true"
            >
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
        <div className={inicio.overlay} />
      </div>

      <div
        id={inicio.funciones}
        className={inicio.section}
        onClick={() => {
          window.location.href = "/funciones";
        }}
        role="button"
        aria-label="Ver funciones disponibles"
        tabIndex={0}
      >
        <div className={inicio.content}>
          <h1 className="text-2xl">Funciones</h1>
          <p className="text-gray-100">
            Conoce todas las funciones que tenemos para vos
          </p>
          <Link
            to="/funciones"
            state={{ link: url }}
            className={"inline-flex relative top-20 " + inicio.btn}
            aria-label="Ver funciones"
          >
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-white hover:bg-black hover:text-white transition duration-500 ease-in-out">
              Ver Funciones
            </span>
            <span
              className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-white hover:bg-black hover:text-white transition duration-500 ease-in-out"
              aria-hidden="true"
            >
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
        <div className={inicio.overlay} />
      </div>
    </div>
  );
}
