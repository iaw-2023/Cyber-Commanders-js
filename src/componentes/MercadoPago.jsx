import React, { useState } from "react";
import axios from "axios";
import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { useLocation, useNavigate } from "react-router-dom";
import CorreoService from "./CorreoService";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useAuth0 } from "@auth0/auth0-react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CompraExito from "./CompraExito"; // Asegúrate de importar tu componente

function MercadoPago() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const [compraExitosa, setCompraExitosa] = useState(false); // Estado para mostrar el componente de éxito

  const location = useLocation();
  const { datos } = location.state || {}; // Asegúrate de que `location.state` no sea `undefined`

  initMercadoPago("TEST-9a0a647f-83e5-41c1-8231-ebb13bd24769", {
    locale: "es-AR",
  });

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 3,
    },
    visual: {
      style: {
        theme: "dark",
      },
      hideFormTitle: true,
    },
  };

  const enviarRequest = async (mercadoPagoData) => {
    setLoading(true); 

    try {
      let accessToken = "";
      if (isAuthenticated) {
        accessToken = await getAccessTokenSilently();
      }
      
      const response = await axios.post(
        "https://cyber-commanders-laravel.vercel.app/rest/procesarCompra",
        { entradaData: datos.apiRequestBody, mpData: mercadoPagoData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const { success, message, paymentResponse } = response.data;

      if (success === "true") {
        CorreoService.sendEmail(user.email, datos.contenidoMail);
        setCompraExitosa(true); 
      }

      setSnackbarMessage(message || "¡Éxito! Gracias por tu compra");
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

  if (compraExitosa) {
    return <CompraExito />;
  }

  return (
    <div style={{ backgroundColor: "#171E2E" }}>
      <h1 style={{ fontSize: 20, color: "white", textAlign: "center" }}>
        FINALIZAR PAGO, TOTAL: {datos.total}$
      </h1>
      <CardPayment
        initialization={{ amount: datos.total }}
        customization={customization}
        onSubmit={async (param) => {
          try {
            enviarRequest(param);
          } catch (error) {
            console.error(error);
          }
        }}
      />
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

export default MercadoPago;
