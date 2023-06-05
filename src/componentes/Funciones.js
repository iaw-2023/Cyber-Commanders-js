import React, { useEffect, useState } from "react";
import axios from "axios";
import Pelis from "./Pelis";


export default function Funciones(promps) {
  const [funciones, setFunciones] = useState([]);
  const [estadoPeli, setEstadoPeli] = useState(
    { nombre: 'Ejemplo', edad: 25 }
  );

  const actualizarEstado = (json) => {
    setEstadoPeli(json.funcion);
  };

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
          <Pelis estadoPeli={estadoPeli} />
          <div className="col-span-3 m-2 border-2 border-slate-100 bg-gray-900">
            <h1 className="text-center text-4xl text-slate-100">Funciones</h1>
            <div class="flex flex-col text-white">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-x-auto max-w-full max-h-[350px] overflow-y-scroll">
                    <table className="text-left min-w-full overflow-auto">
                      <thead className="border-white border-2 flex text-gray-100 w-full">
                        <tr className="flex w-full mb-4">
                          <th className="p-2 w-1/4">
                            <div className="text-center font-semibold">
                              Pelicula
                            </div>
                          </th>
                          <th className="p-2 w-1/4">
                            <div className="text-center font-semibold">
                              Fecha
                            </div>
                          </th>
                          <th className="p-2 w-1/4">
                            <div className="text-center font-semibold">
                              Sala
                            </div>
                          </th>
                          <th className="p-2 w-1/4">
                            <div className="text-center font-semibold">
                              Precio
                            </div>
                          </th>
                          <th className="p-2 w-1/4">
                            <div className="text-center font-semibold">
                              Seleccionar
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-grey-light flex flex-col items-center justify-between w-full">
                        {funciones.map(
                          (funcion) =>
                            funcion.pelicula &&
                            funcion.sala && (
                              <tr
                                key={funcion.id}
                                className="flex w-full m-2 border-white border-2"
                              >
                                <td className="p-4 w-1/4">
                                  <div className="flex items-center">
                                    <div className="font-medium text-bold text-gray-100">
                                      {funcion.pelicula.nombre}
                                    </div>
                                  </div>
                                </td>
                                <td className="p-2 w-1/4">
                                  <div className="text-center text-gray-100">
                                    {funcion.inicio}
                                  </div>
                                </td>
                                <td className="p-2 w-1/4">
                                  <div className="text-center text-gray-100">
                                    {funcion.sala.nombre}
                                  </div>
                                </td>
                                <td className="p-2 w-1/4">
                                  <div className="text-center text-gray-100">
                                    {funcion.precio}
                                  </div>
                                </td>
                                <td className="p-2 w-1/4">
                                  <button onClick={() => actualizarEstado({funcion})} className="bg-transparent hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-900 py-2 px-4 border border-gray-100 hover:border-transparent rounded">
                                    Seleccionar
                                  </button>
                                </td>
                              </tr>
                            )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
