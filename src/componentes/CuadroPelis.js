import React from "react";
import { Link } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
/>;

const baseUrl = "https://cyber-commanders-laravel.vercel.app/rest/funciones/pelicula/";
export default function CuadroPelis(promps) {
  return (
    <div className="card" id={promps.pelicula.id} >
      <div
        className="card__background"
        style={{
          backgroundImage: "url(" + promps.pelicula.poster + ")",
        }}
      />
      <div className="card__content">
        <p className="card__category">
          Duracion: {promps.pelicula.duracion} minutos
        </p>
        <p className="card__heading text-sm">
          Nombre: {promps.pelicula.nombre}
        </p>
      </div>  
      <div className="flex justify-center ">
        <Link to="/funciones" state={{ link: baseUrl+promps.pelicula.id }} className="border border-gray-200 bg-gray-900 z-40  opacity-60 hover:opacity-100 text-white font-semibold hover:text-white text-2xl py-2 px-4 rounded">
        <button >
          Ver funciones
        </button>
        </Link>
      </div>
    </div>
  );
}
