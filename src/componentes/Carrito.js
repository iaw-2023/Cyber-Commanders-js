import React, { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../CartContext";
import { useLocation } from "react-router-dom";
import { getDia, getHora } from "../Fecha";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
import styles from "../CSS/Ticket.module.css";
import CorreoService from "./CorreoService";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
  const [correo, setCorreo] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [pantallaChica, setPantallaChica] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

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

  const enviarRequest = async () => {
    setLoading(true); // Activa el estado de carga

    const apiUrl = "http://localhost:8000/rest/storeEntrada";

    // Prepara los datos para la solicitud
    const json = cartItems.map((item) => ({
      id: item.id,
      cantidad: item.quantity,
    }));

    const prods = cartItems.map((item) => ({
      producto: item.producto,
      tamaño: item.tamaño,
      cantidad: item.quantity,
    }));

    const prodsString = JSON.stringify(prods);
    const text = prodsString.replace(/[{()}[\]""]/g, "");

    const respuestaMail =
      "Funcion : " +
      funcion.pelicula.nombre +
      "\n Inicio :" +
      funcion.inicio +
      "\n Sala : " +
      funcion.sala.nombre +
      "\n Productos \n" +
      text;

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

    try {
      let accessToken = "";
      if (isAuthenticated) {
        accessToken = await getAccessTokenSilently();
      }

      const response = await axios.post(apiUrl, respuestaJSON, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`, // Añadir el token de acceso al encabezado
        },
      });

      console.log(response.data);
      CorreoService.sendEmail(user.email, respuestaMail);
      setSnackbarMessage("¡Éxito! Gracias por tu compra");
      setSnackbarSeverity("success");
    } catch (error) {
      setSnackbarMessage("Error en la compra");
      setSnackbarSeverity("error");
      console.error("Error sending request:", error);
    } finally {
      setLoading(false); // Desactiva el estado de carga
      setOpenSnackbar(true);
    }
  };

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
                <button
                  onClick={enviarRequest}
                  className="h-12 text-xl text-gray-300 bg-transparent border-[1px] border-yellow-600 hover:text-gray-900 hover:bg-gray-300 p-2 mx-10"
                >
                  Comprar
                </button>
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

      {/* Indicador de carga */}
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1300, // Para asegurarse de que esté encima de otros elementos
          }}
        >
          <CircularProgress />
        </Box>
      )}

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
