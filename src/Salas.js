import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroSalaBis from "./componentes/CuadroSalaBis";

export default function Salas() {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/salas")
      .then((response) => setSalas(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="">
      <h1 className="text-center mb-4 text-8xl font-light leading-none tracking-tight text-black-900">
        SALAS
      </h1>
      <p className="mb-6 text-lg text-[30px] text-center text-gray-500">
        En nuestro cine contamos con amplias salas donde podras ver las mejores
        peliculas.
      </p>
      <ul>
        { salas.map((sala) => (
          <li key={sala.id}>
            <CuadroSalaBis />
          </li>
        ))}
      </ul>
    </div>
  );
}
