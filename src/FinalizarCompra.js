import React from "react";
export default function FinalizarCompra(promps) {
    return (
<div className="col-span-2 m-2 justify-center border-2 border-slate-100 bg-gray-900 text-center">
      <h1 className="text-4xl m-2 text-slate-100">Finalizar Compra</h1>
      <div className="rounded-xl">
        <div className="group flex flex-col items-center rounded-md object-cover drop-shadow hover:drop-shadow-lg">
            <p>{promps.estadoCompra.precio_entrada}</p>
            <p>{promps.estadoCompra.precio_extra}</p>

        </div>
      </div>
    </div>
        );
    }
    