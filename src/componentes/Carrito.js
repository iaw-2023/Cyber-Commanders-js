import React, { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import { json, useLocation } from "react-router-dom";
import axios from "axios";
import "../Ticket.css";

function Carrito() {
  const {
    agregarProducto,
    productoEnCarrito,
    disminuirCantidad,
    eliminarProductos,
    setTotal,
    total,
    cartItems,
    productos,
    getCantidad,
  } = useContext(CartContext);

  const location = useLocation();
  const funcion = location.state.funcion;

  useEffect(() => {
    const newTotal = cartItems.reduce((accumulator, item) => {
      return accumulator + item.precio * item.quantity;
    }, funcion.precio);
    setTotal(newTotal);
    console.log(cartItems);
  }, [cartItems]);


  const finalizar = (funcion) => {
    {/* update_extra/{id} */}



     const customConfig = {
      headers: {
      'mediaType': 'application/json'
     }};

   

    axios
    .post("https://cyber-commanders-laravel.vercel.app/rest/rest/storeEntrada", {

    "funcion_id": funcion.funcion_id,
    "extras": [{
      "id": 4,
      "cantidad" :1,
    }]

    }, customConfig)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))


    console.log(funcion.funcion_id)
    eliminarProductos()


  };

  return (
    <div>
      <div className="flex bg-gray-200">
        <div className="border border-gray-300 align-center justify-center flex flex-col w-1/3">
          <h2 className="text-3xl text-center m-2">Productos </h2>
          {productos.map((producto) => (
            <div className=" p-2 border border-gray-300" key={producto.id}>
              <div className="grid grid-cols-2">
                <div className="mx-2 place-items-center">
                  <p className="text-lg">
                    {producto.producto} {producto.tamaño}
                  </p>
                  <p className="text-gray-700">Precio: ${producto.precio}</p>
                </div>
                <div className="inline-flex justify-end">
                  <button
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-10 h-10 rounded "
                    onClick={() => disminuirCantidad(producto.id)}
                  >
                    -
                  </button>
                  {productoEnCarrito(producto.id) ? (
                    <input
                      className="text-gray-700 text-md w-10 text-center text-black "
                      value={getCantidad(producto.id)}
                      disabled
                    />
                  ) : (
                    <input
                      className="text-gray-700 text-md w-10 text-center text-black"
                      value={0}
                      disabled
                    />
                  )}

                  <button
                    className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 w-10 h-10 rounded"
                    onClick={() => agregarProducto(producto.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-2/3">
        <p className="text-3xl text-center m-2">Comprar Entrada</p>
          <>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
            <div className="ticket">
              
              <div className="left">
                <div className="image">
                  <p className="admit-one">
                    <span>CINES IAW</span>
                    <span>CINES IAW</span>
                    <span>CINES IAW</span>
                  </p>
                  <div className="ticket-number">
                    <p>#20030220</p>
                  </div>
                </div>
                <div className="ticket-info">
                  <p className="date">
                    <span>CINES</span>
                    <span className="june-29">{funcion.inicio}</span>
                    <span>IAW</span>
                  </p>
                  <div className="show-name">
                    <h1>{funcion.pelicula.nombre}</h1>
                    <h2>{funcion.sala.nombre}</h2>
                  </div>
                  <div className="time">
                    <p>
                      Valor de la funcion
                    </p>
                    <p>
                      ${funcion.precio}
                    </p>
                  </div>
                  <p className="location">
                    <span>Total de la compra: ${total}</span>
                  </p>
                </div>
              </div>
              <div className="right">
                <p className="admit-one">
                  <span>CINES IAW</span>
                  <span>CINES IAW</span>
                  <span>CINES IAW</span>
                </p>
                <div className="right-info-container">
                  <div className="show-name">
                    <h1>{funcion.pelicula.nombre}</h1>
                  </div>
                  <div className="time">
                    <p>
                      8:00 PM <span>TO</span> 11:00 PM
                    </p>
                    <p>
                      DOORS <span>@</span> 7:00 PM
                    </p>
                  </div>
                  <div className="barcode">
                    <img
                      src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                      alt="QR code"
                    />
                  </div>
                  <p className="ticket-number">#20030220</p>
                </div>               
              </div>
            </div>
          </>

          <div className="inline-flex align-right">
            <h3 className="text-2xl p-2 m-2 ">Total de la compra: ${total}</h3>
            <button
              className=" text-xl bg-transparent border-2 border-black text-black hover:bg-black hover:text-white p-2 m-2 absolute right-0"
              onClick={ () =>  finalizar(funcion) } 
            >
              Finalizar Compra
            </button>

          

          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
