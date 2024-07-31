import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const CompraExito = ({ onClose }) => {
  const navigate = useNavigate();

  const handleInicioClick = () => {
    navigate('/');
  };

  const handleMisComprasClick = () => {
    navigate('/misCompras');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#ffffff', // Fondo blanco
        zIndex: 1300,
        color: 'black', // Texto negro
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <img
        src="https://vxhbrvoxntfzyholqegd.supabase.co/storage/v1/object/public/images/CINELOGO.png"
        alt="Cine Logo"
        style={{ width: '150px', marginBottom: '1rem' }} // Ajusta el tamaño del logo si es necesario
      />
      <CheckCircleIcon
        sx={{ fontSize: 60, color: 'success.main', marginBottom: 2 }}
      />
      <Typography variant="h6" gutterBottom>
        Listo! Muchas gracias por tu compra.
        Chequea tu correo para ver más información.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleInicioClick}
        >
          Ir al Inicio
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleMisComprasClick}
        >
          Mis Compras
        </Button>
      </Box>
    </Box>
  );
};

export default CompraExito;
