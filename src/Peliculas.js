import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroPelis from "./componentes/CuadroPelis";

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/peliculas")
      .then((response) => setPeliculas(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (       
    <div>
      <h1 className="text-center mb-4 text-8xl font-light leading-none tracking-tight text-black-900">
        PELICULAS
      </h1>
      <p className="mb-6 text-lg text-[30px] text-center text-gray-500">
        Algunas de nuestras peliculas son
      </p>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        {peliculas.map((pelicula) => 
        (
          <div key={pelicula.id}>
            <CuadroPelis pelicula={pelicula} />
          </div>
        ))}
      </div>
    </div>
  );
}

