import React, { useState } from "react";


export const Context = React.createContext({})

export default function ContextProvider({children} ){
    const [estadoEntrada, setEstadoEntrada] = useState(
        {
         "id_funcion":0,
         "precio":0,
        }
    );

    const [estadoExtra, setEstadoExtra] = useState({
        extras:[],
    });


    return(
        <Context.Provider value={{ estadoEntrada, setEstadoEntrada ,  estadoExtra, setEstadoExtra}}>
            {children}
        </Context.Provider>
    );
}




