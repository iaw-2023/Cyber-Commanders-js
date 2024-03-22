import React from "react";
import { Link } from "react-router-dom";
import peliculasCSS from '../CSS/Peliculas.module.css'

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
/>;

const baseUrl = "https://cyber-commanders-laravel.vercel.app/rest/funciones/pelicula/";
export default function CuadroPelis(promps) {
  return (
    <div className={peliculasCSS.card} id={promps.pelicula.id} >
      <div
        className={peliculasCSS.card__background}
        style={{
          
          backgroundImage: `url('data:image/jpeg;base64,${promps.pelicula.poster}')`,
        }}
      />
      <div className={peliculasCSS.card__content}>
        <p className={peliculasCSS.card__heading}>
          Nombre: {promps.pelicula.nombre}
        </p>
        <p className={peliculasCSS.card__category}>
          Duracion: {promps.pelicula.duracion} minutos
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
