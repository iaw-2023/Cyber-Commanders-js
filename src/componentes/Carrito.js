import React, { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../CartContext";
import { useLocation } from "react-router-dom";
import { getDia, getHora } from "../Fecha";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
import styles from "../CSS/Ticket.module.css";
import CorreoService from "./CorreoService";

function Carrito() {
  const {
    agregarProducto,
    productoEnCarrito,
    disminuirCantidad,
    setTotal,
    total,
    cartItems,
    productos,
    getCantidad,
    setFuncion,
  } = useContext(CartContext);

  const location = useLocation();
  const funcion = location.state.funcion;
  const [correo, setCorreo] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");


  const handleInputChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    const newTotal = cartItems.reduce((accumulator, item) => {
      return accumulator + item.precio * item.quantity;
    }, funcion.precio);
    setFuncion(funcion.id);
    setTotal(newTotal);
  }, [cartItems]);

  const enviarRequest = () => {

    const apiUrl =
      "https://cyber-commanders-laravel.vercel.app/rest/storeEntrada";


    const json = cartItems.map((item) => {
      return {
        id: item.id,
        cantidad: item.quantity,
      };
    }, {});

    const prods = cartItems.map((item) => {
      return {
        producto: item.producto,
        tamaño: item.tamaño,
        cantidad: item.quantity,
      };
    }, {});

    const prodsString = JSON.stringify(prods);
    const text = prodsString.replace(/[{()}[\]""]/g, '');

    const respuestaMail = "Funcion : "+funcion.pelicula.nombre +"\n Inicio :"+funcion.inicio+"\n Sala : "+funcion.sala.nombre+"\n Productos \n" +text;
    

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const respuesta = {
      funcion_id: funcion.id,
      extras: json,
    };

    const respuestaJSON = JSON.stringify(respuesta);

    axios
      .post(apiUrl, respuestaJSON, config)
      .then((response) => {
        setSnackbarMessage("Exito! Gracias por tu compra");
        setOpenSnackbar(true);
        CorreoService.sendEmail(correo,respuestaMail);
      })
      .catch((error) => {
        setSnackbarMessage("Error en la compra");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
        console.error("Error sending request:", error);
      });
  };

  return (
    <div className=" flex ">
      <div className="flex align-center justify-center">
        <div className="border border-gray-300  flex flex-col w-full h-screen ">
          <h2 className="text-3xl text-center m-2">Productos </h2>
          {productos.map((producto) => (
            <div className=" p-2 border border-gray-300 " key={producto.id}>
              <div className="grid grid-cols-2">
                <div className="mx-2 place-items-center">
                  <p className={styles.prueba}>
                    {producto.producto} {producto.tamaño}
                  </p>
                  <p className="text-gray-700">Precio: ${producto.precio}</p>
                </div>
                <div className="inline-flex justify-end">
                  <button
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-10 h-auto rounded "
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
                    className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 w-10 h-auto rounded"
                    onClick={() => agregarProducto(producto.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col  h-screen mx-20 ">
          <div className="inline-block w-full align-center ">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
            <div className={styles.ticket}>
              <div className={styles.left}>
                <div className={styles.image}>
                  <p className={styles.admitOne}>
                    <span>CINES IAW</span>
                    <span>CINES IAW</span>
                    <span>CINES IAW</span>
                  </p>
                  <div className={styles.ticketNumber}>
                    <p>#20030220</p>
                  </div>
                </div>
                <div className={styles.ticketInfo}>
                  <p className={styles.date}>
                    <span>CINES</span>
                    <span className={styles.june - 29}>
                      {getDia(funcion.inicio)}
                    </span>
                    <span>IAW</span>
                  </p>
                  <div className={styles.showName}>
                    <h1>{funcion.pelicula.nombre}</h1>
                    <h2>{funcion.sala.nombre}</h2>
                  </div>
                  <div className={styles.time}>
                    <p>Valor de la funcion</p>
                    <p>${funcion.precio}</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <p className={styles.admitOne}>
                  <span>CINES IAW</span>
                  <span>CINES IAW</span>
                  <span>CINES IAW</span>
                </p>
                <div className={styles.rightInfoContainer}>
                  <div className={styles.showName}>
                    <h1>{funcion.pelicula.nombre}</h1>
                  </div>
                  <div className="time">
                    <p>DIA : {getDia(funcion.inicio)}</p>
                    <p>Hora : {getHora(funcion.inicio)}</p>
                  </div>
                  <div className={styles.barcode}>
                    <img
                      src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                      alt="QR code"
                    />
                  </div>
                  <p className={styles.ticketNumber}>#20030220</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex mt-20">
            <h3 className="text-2xl p-2  ">Total de la compra: ${total}</h3>
            <input className="border border-black text-center mx-10" type="email" placeholder="Ingresa tu Email" value={correo} onChange={handleInputChange} />
            <button onClick={enviarRequest} className=" text-xl bg-transparent border-2 border-black text-black hover:bg-black hover:text-white p-2 mx-10">
                    Comprar
            </button>

          </div>
        </div>
      </div>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <Alert
            elevation={6}
            variant="filled"
            severity={snackbarSeverity}
            onClose={handleSnackbarClose}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Carrito;