import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Salas() {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/salas")
      .then((response) => setSalas(response.data))
      .catch((error) => console.error(error));
  }, []);

  return(
    <div className='container-items'>
			{salas.map(sala => (
				<div className='item' key={sala.id}>
					<figure>
						<img src={"https://img.freepik.com/vector-gratis/asientos-cine-rojo-pantalla-agua_1017-38348.jpg?w=900&t=st=1685754977~exp=1685755577~hmac=4da16848c7a500108752007dabcc27570b414b661fa98e8906c95e2698c304b1"} alt={sala.nombre} />
					</figure>
					<div className='info-product'>
						<h2>{sala.nombre}</h2>
						<p className='tipo'>{sala.tipo}</p>
						<button >
							Capacidad: {sala.capacidad} personas
						</button>
					</div>
				</div>
			))}
	</div>
  );
}
