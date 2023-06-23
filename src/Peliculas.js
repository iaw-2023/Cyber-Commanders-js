import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroPelis from "./componentes/CuadroPelis";
import "./CSS/Peliculas.css";

export default function Peliculas() {
  <link
    href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300"
    rel="stylesheet"
  />;
  

  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/peliculas")
      .then((response) => setPeliculas(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section className="peliculas hero-section">
        <div className="card-grid">
          {peliculas.map((pelicula) => (
            <CuadroPelis pelicula={pelicula}  key={pelicula.id} />
          ))}
        </div>
      </section>
    </>
  );
}
