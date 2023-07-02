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
      <div className="bg-white w-[30rem] h-[35rem] shadow-md rounded m-5 ">
        <div className="h-3/4 w-full">
          <img
            className="w-full h-full object-cover rounded-t"
            src="https://media.istockphoto.com/id/1295114854/photo/empty-red-armchairs-of-a-theater-ready-for-a-show.jpg?s=612x612&w=0&k=20&c=0rDtwzMmLbqe_8GuGw2dpjkD0MsXGywJmdmg0jDbMxQ="
            alt="imagen de cine"
          />
        </div>
        <div className="w-full p-3 grid grid-cols-2 ">
          <div className="w-1/2">
              <span className="text-lg font-semibold uppercase tracking-wide ">
                {promps.sala.nombre}
              </span>
            <p className="text-gray-600 text-sm  mt-1">
              Capacidad : {promps.sala.capacidad} personas
            </p>
            <p className="text-gray-600 text-sm leading-5 mt-1">
              Tipo : {promps.sala.tipo}
            </p>
          </div>
          <div className="align-center content-center">
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
    </>
  );
}
