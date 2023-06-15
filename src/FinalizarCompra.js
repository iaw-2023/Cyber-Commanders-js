import React from "react";
export default function FinalizarCompra(promps) {
    return (
<div className="col-span-2 m-2 justify-center border-2 border-slate-100 bg-gray-900 text-center">
      <h1 className="text-4xl m-2 text-slate-100">Finalizar Compra</h1>
      <div className="rounded-xl">
        <div className="group flex flex-col items-center rounded-md object-cover drop-shadow hover:drop-shadow-lg">
            <p>{promps.estadoCompra.precio_entrada}</p>
            <p>{promps.estadoCompra.id_funcion}</p>
            <p>{promps.estadoCompra.precio_extra}</p>

            <td className="p-2 w-1/4">
              <button type="button" className="bg-transparent hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-900 py-2 px-4 border border-gray-100 hover:border-transparent rounded">
                Finalizar compra
              </button>
            </td>

        </div>
      </div>
    </div>
        );
    }
    