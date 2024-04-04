import React from "react";
import { Link } from "react-router-dom";
import peliculasCSS from "../CSS/Peliculas.module.css";

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
/>;

const baseUrl =
  "https://cyber-commanders-laravel.vercel.app/rest/funciones/pelicula/";
export default function CuadroPelis({ pelicula }) {
  if (!pelicula) {
    return null;
  } else {
    return (
      <div className={peliculasCSS.card} id={pelicula.id}>
        <div
          className={peliculasCSS.card__background}
          style={{
            backgroundImage: `url('data:image/jpeg;base64,${pelicula.poster}')`,
          }}
        />
        <div className={peliculasCSS.card__content}>
          <p className={peliculasCSS.card__heading}>
            Nombre: {pelicula.nombre}
          </p>
          <p className={peliculasCSS.card__category}>
            Duracion: {pelicula.duracion} minutos
          </p>
        </div>
        <div className={peliculasCSS.ver_funciones}>
          <Link
            to="/funciones"
            state={{ link: baseUrl + pelicula.id }}
            className="border border-gray-200 bg-gray-900  opacity-60 hover:opacity-100 text-white font-semibold hover:text-white text-2xl py-2 px-4 rounded"
          >
            <button >Ver funciones</button>
          </Link>
        </div>
      </div>
    );
  }
}
