import React from "react";

export default function Pelis(promps) {
  return (
    <div className="col-span-2 m-2 justify-center border-2 border-slate-100 bg-gray-900 text-center">
      <h1 className="text-4xl m-2 text-slate-100">Pelicula</h1>
      <div className="rounded-xl">
        <div className="group flex flex-col items-center rounded-md object-cover drop-shadow hover:drop-shadow-lg">
          <img
            src={promps.estadoPeli.pelicula.poster}
            alt=""
            className="h-80 w-64 rounded-tl-md rounded-tr-md border-2 border-slate-100 "
          />
        </div>
        <div className="px-3 py-2">
          <h1 className="font-semibold text-slate-100">
            Nombre: {promps.estadoPeli.pelicula.nombre}
          </h1>
          <p className="text-sm text-slate-100">
            Inicio: {promps.estadoPeli.inicio}
          </p>
          <p className="text-sm text-slate-100">
            Duracion: {promps.estadoPeli.pelicula.duracion} minutos
          </p>
          <p className="text-sm text-slate-100">
            Sala: {promps.estadoPeli.sala.nombre}
          </p>
        </div>
      </div>
    </div>
  );
}
