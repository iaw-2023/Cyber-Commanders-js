import React from "react";

export default function CuadroSalas(promps) {
    return (
      <div className="bg-blue-500 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <h1 className="text-lg text-gray-700"> Nombre: {promps.sala.nombre} </h1>
        <h3 className="text-sm text-gray-400 "> Tipo: {promps.sala.tipo} </h3>
        <h3 className="text-sm text-gray-400 "> Capacidad para: {promps.sala.capacidad +"personas"} </h3>
        <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
          Ver Salas
        </button>
      </div>
    );
  }