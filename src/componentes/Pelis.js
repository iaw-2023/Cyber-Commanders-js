import { React } from "react";
import { Link } from "react-router-dom";

export default function Pelis(promps) {
  const funcion = promps.estadoPeli;
  const mostrar = promps.mostrarVolver;

  return (
    <div
      className={
        mostrar
        ?
        "peliculas col-span-5 m-2 justify-center border-2 border-yellow-600 bg-black  text-center"
        :
        "peliculas col-span-2 m-2 justify-center border-2 border-yellow-600 bg-black   text-center"
      }
    >
      <h1 className="text-4xl m-2 text-slate-100">Pelicula</h1>
      <div className="rounded-xl">
        <div className="group flex flex-col items-center rounded-md object-cover drop-shadow hover:drop-shadow-lg">
          <img
            src={`data:image/jpeg;base64,${funcion.pelicula.poster}`}
            className="w-[15rem] rounded-tl-md rounded-tr-md border-2 border-yellow-600 "
            alt={`poster de la pelicula ${funcion.pelicula.nombre}`}
          />
        </div>
        <div className="px-3 py-2">
          <h1 className="font-semibold text-slate-100 m-2">
            Nombre: {funcion.pelicula.nombre}
          </h1>
          <p className="text-md text-slate-100 m-2">Inicio: {funcion.inicio}</p>
          <p className="text-md text-slate-100 m-2">
            Duracion: {funcion.pelicula.duracion} minutos
          </p>
          <p className="text-md text-slate-100 m-2">
            Sala: {funcion.sala.nombre}
          </p>

          <Link to="/comprarEntrada" state={{ funcion: funcion }}>
            <button className="content-center align-center border border-yellow-600 bg-transparent hover:bg-yellow-600 text-yellow-600 font-semibold hover:text-gray-900 py-2 px-4 m-2 rounded">
              {" "}
              Comprar Entrada{" "}
            </button>
          </Link>
          <div>
            {mostrar && (
              <button className="content-center align-center border border-yellow-600 bg-transparent hover:bg-yellow-600 text-yellow-600 font-semibold hover:text-gray-900 py-2 px-4 m-2 rounded" onClick={promps.toggleShowPeli}>
                {" "}
                Volver{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
