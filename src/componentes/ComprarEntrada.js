import React from "react";
import Extras from "./Extras";
import Cart from "../Cart";
import { CartContext } from "../CartContext";
import { useLocation } from "react-router-dom";

function ComprarEntrada() {
    const location = useLocation();
    const funcion = location.state.funcion;
   


  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Extras  />
      </div>
      <div>
        <Cart funcion = {funcion} />
      </div>
    </div>
  );
}

export default ComprarEntrada;
