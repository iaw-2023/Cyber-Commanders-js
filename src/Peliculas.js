import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroPelis from "./componentes/CuadroPelis";
import peliculasCSS from "./CSS/Peliculas.module.css";
import ComponenteIA from "./componentes/ComponenteIA";
import { CardPayment } from "@mercadopago/sdk-react";

export default function Peliculas() {
  <link
    href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300"
    rel="stylesheet"
  />;

  const [peliculas, setPeliculas] = useState([]);
  const [peliculaObtenida, setPeliculaObtenida] = useState(null);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/peliculas")
      .then((response) => setPeliculas(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  const handlePeliculaObtenida = (pelicula) => {
    setPeliculaObtenida(pelicula);
  };

  return (
    <div className={peliculasCSS.peliculasBackgroundImage}>
      <div className="m-2 border-b-2 border-black">
        <ComponenteIA onPeliculaObtenida={handlePeliculaObtenida} />

      </div>
      {peliculaObtenida !== null && (
        <section
          className={peliculasCSS.peliculas + " " + peliculasCSS.heroSection}
        >
          <div className={peliculasCSS.card_grid}>
            <CuadroPelis pelicula={peliculaObtenida.data} />
          </div>
        </section>
      )}

      {peliculaObtenida === null && (
        <section
          className={peliculasCSS.peliculas + " " + peliculasCSS.heroSection}
        >
          <div className={peliculasCSS.card_grid}>
            {peliculas.map((pelicula) => (
              <CuadroPelis pelicula={pelicula} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
