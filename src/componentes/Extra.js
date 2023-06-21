import React, { useContext } from 'react';
import { CarritoContext } from './CarritoContext';

function Extra({ producto }) {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => agregarProducto(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default Extra;