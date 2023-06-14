import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroSala from "./componentes/CuadroSala";

export default function SalasBis() {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/salas")
      .then((response) => setSalas(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="card-grid">
          {salas.map((sala) => (
            <CuadroSala sala={sala} />
          ))}
        </div>
      </section>
    </>
  );
}