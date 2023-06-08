import React from "react";
import { Link } from "react-router-dom";

export default function CuadroPelis(promps) {
  return (
    <div className=" w-full bg-transparent  p-3 m-3 border-2 border-[#B58B3D] rounded-xl ">
      <div className=" object-cover group flex flex-col items-center rounded-md  drop-shadow hover:drop-shadow-lg">
        <img
          src={promps.pelicula.poster}
          alt={promps.pelicula.nombre}
          className="border-[#B58B3D] border-2  rounded-tl-md rounded-tr-md grayscale-0 hover:grayscale h-80 w-64 object-cover"
        />
        <Link to="/funciones" state = {{link:"https://cyber-commanders-laravel.vercel.app/rest/funciones/pelicula/"+promps.pelicula.id}}>
          <button
            className="opacity-80 bg-gray-700 invisible absolute bottom-3 rounded border-2 
        border-white px-4 py-2 font-semibold text-white group-hover:visible"
          >
            Ver funciones
          </button>
        </Link>
      </div>
      <div className="px-3 py-2">
        <h1 className=" font-semibold text-[#B58B3D]  ">Nombre: {promps.pelicula.nombre}</h1>
        <p className="text-sm text-[#B58B3D] ">
          Duracion: {promps.pelicula.duracion} minutos{" "}
        </p>
      </div>
    </div>
  );
}
