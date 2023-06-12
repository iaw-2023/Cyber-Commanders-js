
import React from "react";

export default function ComprarEntradas(promps) {
  return (
    <div className="col-span-2 m-2 justify-center border-2 border-slate-100 bg-gray-900 text-center">
      <h1 className="text-4xl m-2 text-slate-100">Comprar Entradas</h1>
      <div className="rounded-xl">
        <div className="group flex flex-col items-center rounded-md object-cover drop-shadow hover:drop-shadow-lg">
            <p>{promps.estadoEntrada.precio}</p>
            <p>{promps.estadoEntrada.id_funcion}</p>

            <td className="p-2 w-1/4">
              <button type="button" onClick={(e) => {e.preventDefault(); window.location.href = '/extras';}} className="bg-transparent hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-900 py-2 px-4 border border-gray-100 hover:border-transparent rounded">
                comprar
              </button>
            </td>

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