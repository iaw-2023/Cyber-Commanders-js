import React, { useState } from "react";


export const Context = React.createContext({})

export default function ContextProvider({children} ){


    const [estadoEntrada, setEstadoEntrada] = useState(
        {
         "id_funcion":0,
         "precio":0,
        }
      );


      const [estadoCompra, setEstadoCompra] = useState(
        {
            "precio_extra":0,
        });

    return(
        <Context.Provider value={{ estadoEntrada, setEstadoEntrada , estadoCompra, setEstadoCompra}}>
            {children}
        </Context.Provider>
    );
}




