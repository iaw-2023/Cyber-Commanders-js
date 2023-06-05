import React from "react";
import Funcion from "../Funcion";

export default function CuadroFunciones(promps) {
  return (
    <div class="flex flex-col text-white">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-x-auto max-w-full max-h-[400px] overflow-y-scroll">
            <table className="text-left min-w-full overflow-auto">
              <thead className="border-white border-2 flex text-gray-100 w-full">
                <tr className="flex w-full mb-4">
                  <th className="p-2 w-1/4">
                    <div className="text-center font-semibold">Pelicula</div>
                  </th>
                  <th className="p-2 w-1/4">
                    <div className="text-center font-semibold">Fecha</div>
                  </th>
                  <th className="p-2 w-1/4">
                    <div className="text-center font-semibold">Sala</div>
                  </th>
                  <th className="p-2 w-1/4">
                    <div className="text-center font-semibold">Precio</div>
                  </th>
                  <th className="p-2 w-1/4">
                    <div className="text-center font-semibold">Seleccionar</div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-grey-light flex flex-col items-center justify-between w-full">
                {promps.funciones.map(
                  (funcion) =>
                    funcion.pelicula &&
                    funcion.sala && (
                      <tr key={funcion.id} className="flex w-full border-white border-2">
                        <Funcion funcion={funcion} />
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
