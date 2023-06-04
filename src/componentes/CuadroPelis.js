import React from "react";

export default function CuadroPelis(promps) {
  return (
    <div className=" w-full bg-gray-100 p-3 m-3 border-2 border-black rounded-xl ">
      <div className=" object-cover group flex flex-col items-center rounded-md  drop-shadow hover:drop-shadow-lg">
        <img
          src={promps.pelicula.poster}
          alt={promps.pelicula.nombre}
          className="border-black border-2  rounded-tl-md rounded-tr-md grayscale-0 hover:grayscale h-80 w-64 object-cover"
        />
        <button className="opacity-80 bg-gray-700 invisible absolute bottom-3 rounded border-2 border-white px-4 py-2 font-semibold text-white group-hover:visible">
          Ver funciones
        </button>
      </div>
      <div className="px-3 py-2">
        <h1 className=" font-semibold ">Nombre: {promps.pelicula.nombre}</h1>
        <p className="text-sm ">Duracion: {promps.pelicula.duracion} minutos </p>
      </div>
    </div>
  );
}
