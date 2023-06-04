import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroFunciones from "./CuadroFunciones";

export default function Funciones(promps) {
  const [funciones, setFunciones] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/funciones")
      .then((response) => setFunciones(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="bg-gray-900">
        <div className="grid grid-cols-5">
          <div className="col-span-2 m-2 justify-center border-2 border-slate-100 bg-gray-900 text-center">
            <h1 className="text-xl text-slate-100">Pelicula</h1>
            <div className="rounded-xl">
              <div className="group flex flex-col items-center rounded-md object-cover drop-shadow hover:drop-shadow-lg">
                <img
                  src="https://vxhbrvoxntfzyholqegd.supabase.co/storage/v1/object/public/images/IntoTheWild.jpg"
                  alt="{promps.pelicula.nombre}"
                  className="h-80 w-64 rounded-tl-md rounded-tr-md border-2 border-black grayscale-0 hover:grayscale"
                />
              </div>
              <div className="px-3 py-2">
                <h1 className="font-semibold text-slate-100">
                  Nombre: {"{"}promps.pelicula.nombre{"}"}
                </h1>
                <p className="text-sm text-slate-100">
                  Inicio: {"{"}promps.pelicula.duracion{"}"} minutos
                </p>
                <p className="text-sm text-slate-100">
                  Fin: {"{"}promps.pelicula.duracion{"}"} minutos
                </p>
                <p className="text-sm text-slate-100">
                  Sala: {"{"}promps.pelicula.duracion{"}"} minutos
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 m-2 border-2 border-slate-100 bg-gray-900">
            <h1 className="text-center text-4xl text-slate-100">Funciones</h1>
            <CuadroFunciones funciones={funciones} />
          </div>
        </div>
        <div className="m-2 border-2 border-slate-100 bg-gray-900">
          <h1 className="text-center text-4xl text-slate-100">
            Comprar Entrada
          </h1>
        </div>
      </div>
    </div>
  );
}
