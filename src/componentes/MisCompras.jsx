import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import styles from "./../CSS/MisCompras.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const MisCompras = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [compras, setCompras] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompras();
  }, [isAuthenticated, getAccessTokenSilently]);

  const fetchCompras = async () => {
    setLoading(true); // Activa el estado de carga
    try {
      let accessToken = "";

      if (isAuthenticated) {
        accessToken = await getAccessTokenSilently();
      }
      const response = await axios.get(
        "https://cyber-commanders-laravel.vercel.app/rest/entradas/request",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setCompras(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error en la respuesta:", error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    } finally {
      setLoading(false); 
    }
  };

  const formatDateTime = (datetime) => {
    const [date, time] = datetime.split(" ");
    return { date, time };
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <Box
          sx={{
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Esto hace que el contenedor ocupe toda la altura de la ventana
          }}
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <div className={styles.error}>Error: {error}</div>
      ) : (
        <div>
          <h1 className={styles.titulo}>Compras</h1>
          {compras.length > 0 ? (
            compras.map((compra, index) => {
              const { date, time } = formatDateTime(compra.funcion.fecha);
              
              // Calcular el total de la compra
              const totalExtras = compra.extras.reduce(
                (total, extra) => total + extra.precio * extra.pivot.cantidad,
                0
              );
              const total = compra.funcion.precio + totalExtras;

              return (
                <div key={index} className={styles.compra}>
                  <h2>Película: {compra.funcion.pelicula.nombre}</h2>
                  <div>
                    Fecha: {date} Hora {time}
                  </div>
                  <div className={styles.separator} /> 
                  {compra.extras.length > 0 && (
                    <>
                      <h4>Extras:</h4>
                      <ul>
                        {compra.extras.map((extra, extraIndex) => (
                          <li key={extraIndex} className={styles.extra}>
                            <p>Nombre: {extra.producto}</p>
                            <p>Tamaño: {extra.tamaño}</p>
                            <p>Precio: {extra.precio} $</p>
                            <p>Cantidad: {extra.pivot.cantidad}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <h4>Total: {total} $</h4>
                </div>
              );
            })
          ) : (
            <p>No hay compras para mostrar.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MisCompras;