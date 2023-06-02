import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroPelis from './componentes/CuadroPeli';

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/peliculas")
      .then((response) => setPeliculas(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="">
      <h1 className="text-center mb-4 text-8xl font-light leading-none tracking-tight text-black-900">
        PELICULAS
      </h1>
      <p className="mb-6 text-lg text-[30px] text-center text-gray-500">
        Algunas de nuestras peliculas son
      </p>
      <ul>
        {peliculas.map((pelicula) => (
          <li key={pelicula.id}>
            <CuadroPelis pelicula={pelicula} / >
          </li>
        ))}
      </ul>
    </div>
  );
}
