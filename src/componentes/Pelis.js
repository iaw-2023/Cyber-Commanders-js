import React from "react";
import "../CSS/Peliculas.css";
import { Link } from "react-router-dom";

export default function Pelis(promps) {
  const funcion = promps.estadoPeli;
  return (
    <div className="peliculas col-span-2 m-2 justify-center border-2 border-slate-100 bg-gray-900  text-center">
      <h1 className="text-4xl text-red-200 m-2 text-slate-100">Pelicula</h1>
      <div className="rounded-xl">
        <div className="group flex flex-col items-center rounded-md object-cover drop-shadow hover:drop-shadow-lg">
          <img
            src={funcion.pelicula.poster}
            alt=""
            className="h-80 w-64 rounded-tl-md rounded-tr-md border-2 border-slate-100 "
          />
        </div>
        <div className="px-3 py-2">
          <h1 className="font-semibold text-slate-100">
            Nombre: {funcion.pelicula.nombre}
          </h1>
          <p className="text-sm text-slate-100">
            Inicio: {funcion.inicio}
          </p>
          <p className="text-sm text-slate-100">
            Duracion: {funcion.pelicula.duracion} minutos
          </p>
          <p className="text-sm text-slate-100">
            Sala: {funcion.sala.nombre}
          </p>
          
            <Link to="/comprarEntrada" state={{ funcion: funcion }}> 
              <button className="content-center align-center border border-gray-100 bg-transparent hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-900 py-2 px-4  rounded"> Comprar Entrada </button>
            </Link>
       
        </div>
      </div>
    </div>
  );
}
