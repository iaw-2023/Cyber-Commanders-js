import React from "react";

export default function Finalizar(promps){

    return(

        <div>
            <h4>{promps.precio} + {promps.estadoCompra.precio_extra}</h4>
        </div>
    );

}