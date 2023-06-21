import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/extras")
      .then((response) => setProductos(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Calcula el total de la compra cuando los elementos del carrito cambian
    const newTotal = cartItems.reduce((accumulator, item) => {
      return accumulator + item.precio * item.quantity;
    }, 0);
    console.log(cartItems)
    setTotal(newTotal);
  }, [cartItems]);


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
        console.log(productToAdd.id+ "id")
      }
    }
  };

  const productoEnCarrito = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  const getCantidad = (productId) => {
    return (cartItems.find((item) => item.id === productId)).quantity;
  }

  

  const eliminarProducto = () => {
    const updatedCartItems = cartItems.filter((item) => item.quantity > 0);
    setCartItems(updatedCartItems);
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

  const cartContextValue = {
    cartItems,
    total,
    agregarProducto,
    eliminarProducto,
    disminuirCantidad,
    productoEnCarrito,
    productos,
    getCantidad,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
