import axios from "axios";
import { CartContext } from "../CartContext";
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect } from "react";


function Finalizar(){

  const location = useLocation();
  const funcion = location.state.funcion;

    const {
        cartItems,
    } = useContext(CartContext);
    

    return (
      axios 
      .post("https://cyber-commanders-laravel.vercel.app/rest/rest/storeEntrada",{
        "funcion_id": funcion.funcion_id,
        "extras": cartItems
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
    );
}

export default Finalizar;