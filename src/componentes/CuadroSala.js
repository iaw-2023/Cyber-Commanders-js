import React from "react";

<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
  rel="stylesheet"
/>;

export default function CuadroSala(promps) {
  return (
    <a className="card" href="#">
      <div
        className="card__background"
        style={{
          backgroundImage:
            "url(https://images.lincolncenter.org/image/upload/v1656438511/tvk7bxgttcz47ge5zemn.jpg)",
        }}
      />
      <div className="card__content">
        <h3 className="card__heading">Nombre: {promps.sala.nombre} </h3>
        <h3 className="card__category">Capacidad {promps.sala.nombre} Personas</h3>
        <h3 className="card__category">Tipo {promps.sala.tipo} </h3>
      </div>
    </a>
  );
}
