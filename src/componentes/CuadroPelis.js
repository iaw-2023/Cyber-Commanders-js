import React from "react";

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
/>;

export default function CuadroPelis(promps) {
  return (
    <a className="card" href="#">
      <div
        className="card__background"
        style={{
          backgroundImage:
          'url('+promps.pelicula.poster+')'
        }}
      />
      <div className="card__content">
        <p className="card__category">Duracion: {promps.pelicula.duracion} minutos</p>
        <h3 className="card__heading">Nombre: {promps.pelicula.nombre}</h3>
      </div>
    </a>
  );
}
