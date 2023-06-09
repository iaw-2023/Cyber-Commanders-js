import React from "react";

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
/>;

export default function CuadroPelis(promps) {
  return (
    <div className="card">
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
      <div class="flex justify-center ">
        <button class="bg-gray-900 z-40  opacity-60 hover:opacity-100 text-white font-semibold hover:text-white text-2xl py-2 px-4 rounded">
          Ver funciones
        </button>
      </div>
    </div>
  );
}
