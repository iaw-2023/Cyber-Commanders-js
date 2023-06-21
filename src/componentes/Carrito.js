import React, { useContext, useEffect } from 'react';
import { CartContext } from '../CartContext'
import { useLocation } from 'react-router-dom';

function Carrito() {
  const { agregarProducto, productoEnCarrito, disminuirCantidad,eliminarProductos,setTotal, total,cartItems, productos, getCantidad } = useContext(
    CartContext
  );

  const location = useLocation();
  const funcion = location.state.funcion;

  useEffect(() => {
    
    
    const newTotal = cartItems.reduce((accumulator, item) => {
      return  accumulator + item.precio * item.quantity;
    }, funcion.precio);
    setTotal(newTotal);
    console.log(cartItems)
  }, [cartItems]);


  return (
    <div>
    <h1>Funcion = {funcion.precio}</h1>
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
      <button onClick={eliminarProductos}>Comprar</button>
    </div>
  );
}

export default Carrito;