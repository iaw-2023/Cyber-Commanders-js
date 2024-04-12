import React, { useEffect, useState } from "react";
import axios from "axios";
import Pelis from "./Pelis";
import { useLocation } from "react-router-dom";
import { formatearFecha } from "../Fecha";

export default function Funciones() {
  const url = "https://cyber-commanders-laravel.vercel.app/rest/funciones";
  const location = useLocation();
  const link = location.state ? location.state.link : url;

  const [showPeli, setShowPeli] = useState(false);
  const [funciones, setFunciones] = useState([]);
  const [pantallaChica, setPantallaChica] = useState(false);
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

  const [filter, setFilter] = useState("");

  const handleClick = () => {
    setFilter("");
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const toggleShowPeli = () => {
    setShowPeli(!showPeli);
  };

  const filteredData = funciones.filter((funcion) =>
    funcion.inicio.toLowerCase().includes(filter.toLowerCase())
  );

  const actualizarEstado = (json) => {
    setEstadoPeli(json.funcion);
    setEstadoEntrada({
      id_funcion: json.funcion.id,
      precio: json.funcion.precio,
    });
    setShowPeli(true);
  };

  useEffect(() => {
    axios
      .get(link)
      .then((response) => setFunciones(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Función para manejar cambios en el tamaño de la pantalla
    const handleResize = () => {
      // Condición para mostrar el div si el ancho de la pantalla es mayor que 800px
      if (window.innerWidth < 800) {
        setPantallaChica(true);
      } else {
        setPantallaChica(false);
      }
    };
    // Agregar event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llamamos a handleResize al inicio para establecer el estado inicial
    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="bg-black border border-gray-100 h-full">
        <div className=" border border-gray-100 grid grid-cols-5">
          {showPeli && (
            <Pelis estadoPeli={estadoPeli} mostrarVolver={pantallaChica} toggleShowPeli={toggleShowPeli} />
          )}
          <div
            className={
              showPeli
                ? "col-span-3 m-2  "
                : "col-span-5 m-2  "
            }
          >
            {(!showPeli || !pantallaChica)  && (
              <div>
                <h1 className="text-center text-4xl text-slate-100">
                  Proximas Funciones
                </h1>
                <div className="flex flex-col text-white">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="flex justify-center items-center">
                        <label className="m-2 text-lg ">
                          Buscar por fecha:
                        </label>
                        <input
                          className="m-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                          type="date"
                          value={filter}
                          onChange={handleFilterChange}
                          placeholder="Filtrar por nombre"
                        />
                        <button
                          onClick={handleClick}
                          className=" border-2 m-2 p-2 border-yellow-600"
                        >
                          {" "}
                          Limpiar{" "}
                        </button>
                      </div>
                      <div className="-white overflow-x-auto max-w-full h-screen overflow-y-scroll">
                        <table className="text-left min-w-full overflow-auto">
                          <thead className=" border-2 border-yellow-600  flex text-gray-100 w-full">
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
                            {filteredData.length === 0 ||
                            funciones.length === 0 ? (
                              <tr>
                                <td colSpan="2">
                                  No se encontraron resultados.
                                </td>
                              </tr>
                            ) : (
                              filteredData.map(
                                (funcion) =>
                                  funcion.pelicula &&
                                  funcion.sala && (
                                    <tr
                                      key={funcion.id}
                                      className="hover:bg-gray-950 flex w-full m-2 border border-yellow-600 "
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
                                        <div className="flex flex-col items-center justify-center">
                                          <button
                                            onClick={() =>
                                              actualizarEstado({ funcion })
                                            }
                                            className="content-center align-center border border-yellow-600 bg-transparent hover:bg-yellow-600 text-yellow-600 font-semibold hover:text-gray-900 py-2 px-4  rounded"
                                          >
                                            Seleccionar
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  )
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
