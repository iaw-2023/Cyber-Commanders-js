import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { useLocation } from "react-router-dom";
import { getDia, getHora } from "../Fecha";
import styles from "../CSS/Ticket.module.css";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";
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
  const [pantallaChica, setPantallaChica] = useState(false);
  const [loading, setLoading] = useState(false); 
  const { isAuthenticated} =
    useAuth0();

  useEffect(() => {
    const newTotal = cartItems.reduce((accumulator, item) => {
      return accumulator + item.precio * item.quantity;
    }, funcion.precio);
    setFuncion(funcion.id);
    setTotal(newTotal);
  }, [cartItems]);

  // Manejo Los cambios de tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setPantallaChica(true);
      } else {
        setPantallaChica(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generarDatosCompra = () => {
    const extrasParaApi = cartItems.map((item) => ({
      id: item.id,
      cantidad: item.quantity,
    }));

    const apiRequestBody = {
      funcion_id: funcion.id,
      extras: extrasParaApi,
    };

    const objetosExtras = cartItems.map((item) => ({
      producto: item.producto,
      tamaño: item.tamaño,
      cantidad: item.quantity,
    }));

    // Creo un string formateado para enviar en el mail
    const extrasParaMail = JSON.stringify(objetosExtras).replace(
      /[{()}[\]""]/g,
      ""
    );

    const contenidoMail =
      "Funcion : " +
      funcion.pelicula.nombre +
      "\n Inicio :" +
      funcion.inicio +
      "\n Sala : " +
      funcion.sala.nombre +
      "\n Productos \n" +
      extrasParaMail;

    return {
      apiRequestBody: apiRequestBody,
      contenidoMail: contenidoMail,
      total: total,
      apiUrl: "https://cyber-commanders-laravel.vercel.app/rest/storeEntrada",
    };
  };

  /**
  const enviarRequest = async () => {
    setLoading(true); // Activa el estado de carga

    const apiUrl =
      "https://cyber-commanders-laravel.vercel.app/rest/storeEntrada";

    const extrasParaApi = cartItems.map((item) => ({
      id: item.id,
      cantidad: item.quantity,
    }));

    const objetosExtras = cartItems.map((item) => ({
      producto: item.producto,
      tamaño: item.tamaño,
      cantidad: item.quantity,
    }));

    // Creo un string formateado para enviar en el mail
    const extrasParaMail = JSON.stringify(objetosExtras).replace(
      /[{()}[\]""]/g,
      ""
    );

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const apiRequestBody = {
      funcion_id: funcion.id,
      extras: extrasParaApi,
    };

    try {
      let accessToken = "";
      if (isAuthenticated) {
        accessToken = await getAccessTokenSilently();
      }

      await axios.post(apiUrl, apiRequestBody, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`, // Añadir el token de acceso al encabezado
        },
      });

      //Genero el contenido del mail que se envia al comprador
      const contenidoMail =
        "Funcion : " +
        funcion.pelicula.nombre +
        "\n Inicio :" +
        funcion.inicio +
        "\n Sala : " +
        funcion.sala.nombre +
        "\n Productos \n" +
        extrasParaMail;

      // CorreoService.sendEmail(user.email, contenidoMail);

      // setSnackbarMessage("¡Éxito! Gracias por tu compra");
      //setSnackbarSeverity("success");
    } catch (error) {
      //setSnackbarMessage("Error en la compra");
      //setSnackbarSeverity("error");
      console.error("Error sending request:", error);
    } finally {
      //setLoading(false); // Desactiva el estado de carga
      //setOpenSnackbar(true);
    }
  };
 */
  return (
    <div className="flex bg-slate-70 bg-black text-gray-300 h-screen ">
      {!loading && (
        <div className="flex align-center justify-center">
          <div
            className={`border border-yellow-600 flex flex-col ${
              pantallaChica ? "w-screen" : "w-auto"
            } `}
          >
            <h2 className="text-3xl text-center m-2 ">Productos </h2>
            {productos.map((producto) => (
              <div className=" p-2 border border-yellow-600 " key={producto.id}>
                <div className="grid grid-cols-2">
                  <div className="mx-2 place-items-center ">
                    <p className={styles.prueba}>
                      {producto.producto} tamaño {producto.tamaño}
                    </p>
                    <p className="text-gray-200">Precio: ${producto.precio}</p>
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
                        className=" text-md w-10 text-center text-black "
                        value={getCantidad(producto.id)}
                        disabled
                      />
                    ) : (
                      <input
                        className="text-md w-10 text-center text-black bg-gray-300"
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
            <div className="inline-flex mt-10 ">
              <h3 className="text-2xl p-2  ">Total: ${total}</h3>

              {isAuthenticated ? (
                <>
              <Link to="/finalizar" state={{ datos: generarDatosCompra() }}>
                <button className="content-center align-center border border-yellow-600 bg-transparent hover:bg-yellow-600 text-yellow-600 font-semibold hover:text-gray-900 py-2 px-4 m-2 rounded">
                  Comprar Entrada
                </button>
              </Link>
                </>
              ) : (
                <p> Inicia sesion para comprar tu entrada</p>
              )}

            </div>
          </div>
          <div className={styles.container}>
            {!pantallaChica && (
              <div className="flex flex-col  h-auto mx-20">
                <div className="inline-block w-auto align-center ">
                  <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                  />
                  <div className={styles.ticket}>
                    <div className={styles.left}>
                      <div
                        className={styles.image}
                        aria-label="Imagen de una silla de cine"
                        role="img"
                      >
                        <p className={styles.troquel}>
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
                          <span className={styles.fecha}>
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
                        <div className={styles.time}>
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
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;
