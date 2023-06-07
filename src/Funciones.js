import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Funciones() {
  const [funciones, setFunciones] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/funciones")
      .then((response) => setFunciones(response.data))
      .catch((error) => console.error(error));
  }, []);

  return(
    <div className='container-items'>
		{funciones.map(funcion => (
			<div className='item' key={funcion.id}>
				<figure>
					<img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fradioaoran.com.ar%2Flocales%2Fdia-de-reyes-el-cine-municipal-brinda-funcion-solidaria-para-todos-los-chicos%2F&psig=AOvVaw1117gDS4JvpolFf621YLHh&ust=1686002697002000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiSktLPqv8CFQAAAAAdAAAAABAH"} alt={funcion.fecha} />
				</figure>
				<div className='info-product'>
					<h2> Fecha: {funcion.fecha}</h2>
					<p className='tipo'>{funcion.fin}</p>
                    <p className='tipo'>{funcion.precio}</p>
					<button  >
						Comprar entrada para esta funcion
					</button>
				</div>
			</div>
		))}
	</div>
  );
}