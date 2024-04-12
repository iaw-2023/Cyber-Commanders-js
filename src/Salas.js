import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroSala from "./componentes/CuadroSala";

export default function Salas() {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/salas")
      .then((response) => setSalas(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full bg-black">
      <div className=" text-center ">
        <h1 className="text-gray-100 text-4xl p-3 ">NUESTRAS SALAS</h1>
      </div>
      <div className="w-screen py-6 bg-black flex items-center justify-center flex-wrap">
        {salas.map((sala) => (
          <CuadroSala sala={sala} key={sala.id} />
        ))}
      </div>
    </div>
  );
}
