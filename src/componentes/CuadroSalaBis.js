import React from "react";

export default function CuadroSalaBis(promps){
    return(
				<div >
					<figure>
						<img src={"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"} alt={promps.sala.id} />
					</figure>
					<div className='info-product'>
						<h2>{promps.sala.nombre}</h2>
						<p className='price'>${promps.sala.capacidad}</p>

					</div>
				</div>

    );
}