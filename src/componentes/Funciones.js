import React, { useEffect, useState } from "react";
import axios from "axios";
import Pelis from "./Pelis";
import { useLocation } from "react-router-dom";

export default function Funciones() {
  const location = useLocation();
  const link = location.state.link;

  const [showPeli, setShowPeli] = useState(false);
  const [funciones, setFunciones] = useState([]);
  const [estadoPeli, setEstadoPeli] = useState({
    id: 0,
    inicio: "",
    precio: 0,
    pelicula: {
      id: 0,
      duracion: "",
      poster: "",
      nombre: "",
    },
    sala: { capacidad: 0, tipo: "", nombre: "" },
    showPeli,
  });

  const [estadoEntrada, setEstadoEntrada] = useState({
    id_funcion: 0,
    precio: 0,
  });

  const actualizarEstado = (json) => {
    setEstadoPeli(json.funcion);
    setEstadoEntrada({
      id_funcion: json.funcion.id,
      precio: json.funcion.precio,
    });
    setShowPeli(true);
  };

  function formatearFecha(original) {
    const array = original.split(" ");
    const fecha = array[0];
    const hora = array[1];
    const anio = fecha.split("-")[0];
    const mes = fecha.split("-")[1];
    const dia = fecha.split("-")[2];

    const horas = hora.split(":")[0];
    const minutos = hora.split(":")[1];

    return dia + "/" + mes + "/" + anio + " " + horas + ":" + minutos;
  }

  useEffect(() => {
    axios
      .get(link)
      .then((response) => setFunciones(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="bg-gray-900 border border-gray-100">
        <div className=" border border-gray-100 grid grid-cols-5">
          {showPeli && <Pelis estadoPeli={estadoPeli} />}
          <div
            className={
              showPeli
                ? "col-span-3 m-2  bg-gray-900"
                : "col-span-5 m-2  bg-gray-900"
            }
          >
            <h1 className="text-center text-4xl text-slate-100">Funciones</h1>
            <div className="flex flex-col text-white">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="-white overflow-x-auto max-w-full max-h-[350px] overflow-y-scroll">
                    <table className="text-left min-w-full overflow-auto">
                      <thead className=" border-2 border-white  flex text-gray-100 w-full">
                        <tr className="flex w-full mb-4 ">
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
                                className="hover:bg-gray-600 flex w-full m-2 border border-gray-100 "
                              >
                                <td className="p-4 w-1/4">
                                  <div className="text-center font-medium text-bold text-gray-100">
                                    {funcion.pelicula.nombre}
                                  </div>
                                </td>
                                <td className="p-2 w-1/4">
                                  <div className="text-center text-gray-100">
                                    {formatearFecha(funcion.inicio)}
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
                                  <div className="">
                                    <button
                                      onClick={() =>
                                        actualizarEstado({ funcion })
                                      }
                                      className="content-center align-center border border-gray-100 bg-transparent hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-900 py-2 px-4  rounded"
                                    >
                                      Seleccionar
                                    </button>
                                  </div>
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
      </div>
    </div>
  );
}
