import React from "react";
import { Link } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
/>;

const baseUrl =
  "https://cyber-commanders-laravel.vercel.app/rest/funciones/sala/";

export default function CuadroSala(promps) {
  return (
    <>
     
<div className="col-1-of-3" id={promps.sala.id}>
  <div className="card m-5">
    <div className="card__side card__side--front">
      <div className="card__title card__title">
        <i className="fas fa-paper-plane" />
        <h4 className="card__heading">{promps.sala.nombre}</h4>
      </div>
      <div className="card__details">
        <ul>
          <li>Capacidad Para {promps.sala.capacidad} Personas</li>
          <li>Tipo de sala: {promps.sala.tipo}</li>
        </ul>
      </div>
    </div>
    <div className="card__side card__side--back card__side--back-1">
      <div className="card__cta">
        <div className="card__price-box">
          <p className="card__price-only">Clickea para ver</p>
          <p className="card__price-only">las funciones de esta sala</p>
        </div>
        <Link
            to="/funciones"
            state={{ link: baseUrl + promps.sala.id }}
            className="border border-gray-200 bg-gray-900 z-40  opacity-60 hover:opacity-100 text-white font-semibold hover:text-white text-2xl py-2 px-4 rounded"
          >
            <button>Ver Funciones</button>
          </Link>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

