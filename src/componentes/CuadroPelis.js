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
          aria-label={`Poster de la película ${pelicula.nombre}`}
          role="img"
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
            className="z-40 border border-gray-200 bg-transparent hover:opacity-100 text-white font-semibold hover:text-white hover:bg-gray-800 text-2xl py-2 px-4 rounded my-3"
          >
            <button >Ver funciones</button>
          </Link>
        </div>
      </div>
    );
  }
}
