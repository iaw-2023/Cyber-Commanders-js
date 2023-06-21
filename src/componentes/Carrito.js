import React, { useContext } from 'react';
import { CartContext } from '../CartContext'

function Carrito() {
  const { agregarProducto, productoEnCarrito, disminuirCantidad,eliminarProducto, total, productos, cartItems,getCantidad } = useContext(
    CartContext
  );

  return (
    <div>
      <h2>Productos en el carrito:</h2>
      {productos.map((producto) => (
        <div className="border border-black p-2" key={producto.id}>
          <p className='text-md'>{producto.producto}</p>
          <p>Precio: ${producto.precio}</p> 
          {
            productoEnCarrito(producto.id)? 
            <p>{getCantidad(producto.id)}</p> :
            <p>Cant = 0</p>
          }
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 border border-blue-700 rounded" onClick={() => agregarProducto(producto.id)}>+</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 border border-blue-700 rounded" onClick={() => disminuirCantidad(producto.id)}>-</button>
        </div>
      ))}
      <h3 className='text-xl p-2 m-2 '>Total de la compra: ${total}</h3>
    </div>
  );
}

export default Carrito;