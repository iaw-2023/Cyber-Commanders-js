import React from "react";

export default function CuadroPelis(promps) {
  return (
    <div className="bg-blue-500 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
      <img
        className="mb-3 w-32 h-32 shadow-lg mx-auto"
        src={promps.pelicula.poster}
        alt="poster"
      />
      <h1 className="text-lg text-gray-700"> Nombre: {promps.pelicula.nombre} </h1>
      <h3 className="text-sm text-gray-400 "> Duracion: {promps.pelicula.duracion} </h3>
      <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
        Ver Funciones
      </button>
    </div>
  );
}

