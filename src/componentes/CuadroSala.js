import React from "react";
import { Link } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
/>;

const baseUrl ="https://cyber-commanders-laravel.vercel.app/rest/funciones/sala/"

export default function CuadroSala(promps) {
  return (
    <>
      <div
        className="card__background"
        style={{
          backgroundImage:
            "url(https://images.lincolncenter.org/image/upload/v1656438511/tvk7bxgttcz47ge5zemn.jpg)",
        }}
      />
      <div className="card__content">
        <h3 className="card__heading">Nombre: {promps.sala.nombre} </h3>
        <h3 className="card__category">Capacidad {promps.sala.capacidad} Personas</h3>
        <h3 className="card__category">Tipo {promps.sala.tipo} </h3>
      </div>
      <div className="flex justify-center ">
         <Link to="/funciones" state={{ link: baseUrl+promps.sala.id }} className="border border-gray-200 bg-gray-900 z-40  opacity-60 hover:opacity-100 text-white font-semibold hover:text-white text-2xl py-2 px-4 rounded">
        <button >
          Ver Funciones
        </button>
        </Link>
      </div>
    </>
  );
}
