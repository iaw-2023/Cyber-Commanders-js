import React from "react";

export default function Funcion(promps) {
  return (
    <>
      <td className="p-4 w-1/4">
        <div className="flex items-center">
          <div className="font-medium text-bold text-gray-100">
            {promps.funcion.pelicula.nombre}
          </div>
        </div>
      </td>
      <td className="p-2 w-1/4">
        <div className="text-center text-gray-100">{promps.funcion.inicio}</div>
      </td>
      <td className="p-2 w-1/4">
        <div className="text-center text-gray-100">
          {promps.funcion.sala.nombre}
        </div>
      </td>
      <td className="p-2 w-1/4">
        <div className="text-center text-gray-100">{promps.funcion.precio}</div>
      </td>
      <td className="p-2 w-1/4">
        <button className="bg-transparent hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-900 py-2 px-4 border border-gray-100 hover:border-transparent rounded">
          Seleccionar
        </button>
      </td>
    </>
  );
}
