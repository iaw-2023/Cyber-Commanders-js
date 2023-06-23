import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroSala from "./componentes/CuadroSala";
import "./CSS/Salas.css";

export default function Salas() {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/salas")
      .then((response) => setSalas(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
        <div className="row">
          {salas.map((sala) => (
            <CuadroSala sala={sala} key={sala.id} />
          ))}
        </div>
    </>
  );
}
