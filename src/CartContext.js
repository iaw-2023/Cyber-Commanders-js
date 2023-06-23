import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";

const CartContext = createContext();

const CartProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [funcion, setFuncion] = useState("");

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/extras")
      .then((response) => setProductos(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  const agregarProducto = (productId) => {
    const productToAdd = productos.find((product) => product.id === productId);

    if (productToAdd) {
      const existingItem = cartItems.find((item) => item.id === productId);
      if (existingItem) {
        const updatedCartItems = cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  const productoEnCarrito = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  const getCantidad = (productId) => {
    return cartItems.find((item) => item.id === productId).quantity;
  };

  const enviarRequest = () => {
    const apiUrl =
      "https://cyber-commanders-laravel.vercel.app/rest/storeEntrada";

    const json = cartItems.map((item) => {
      return {
        id: item.id,
        cantidad: item.quantity,
      };
    }, {});

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const respuesta = {
      funcion_id: funcion,
      extras: json,
    };

    const respuestaJSON = JSON.stringify(respuesta);

    axios
      .post(apiUrl, respuestaJSON,config)
      .then((response) => {
        console.log("Respuesta de la API:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  const disminuirCantidad = (productID) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productID && item.quantity >= 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  function convertListToJson() {
    const json = cartItems.map((item) => {
      return {
        id: item.id,
        cantidad: item.quantity,
      };
    }, {});

    const respuesta = {
      funcion_id: funcion,
      extras: json,
    };

    return JSON.stringify(respuesta);
  }

  const cartContextValue = {
    cartItems,
    total,
    agregarProducto,
    enviarRequest,
    disminuirCantidad,
    productoEnCarrito,
    productos,
    setTotal,
    getCantidad,
    setFuncion,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
