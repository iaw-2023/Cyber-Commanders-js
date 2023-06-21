
import React from "react";
import { Link } from "react-router-dom";

export default function ComprarEntradas(promps) {
  return (
    <div className="col-span-2 m-2 justify-center border-2 border-slate-100 bg-gray-900 text-center">
      <h1 className="text-4xl m-2 text-slate-100">Comprar Entradas</h1>
      <div className="rounded-xl">
        <div className="group flex flex-col items-center rounded-md object-cover drop-shadow hover:drop-shadow-lg">
            <p className="text-white text-md">{promps.estadoEntrada.precio}</p>
            <p className="text-white text-md">{promps.estadoEntrada.id_funcion}</p>
            <Link to="/extras"  >
              
              <button className="border border-white text-white bg-red-400">
                Comprar
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}








<div className="m-2 border-2 border-slate-100 bg-gray-900">
<h1 className="text-center text-4xl text-slate-100">
  Comprar Entrada
</h1>
</div>