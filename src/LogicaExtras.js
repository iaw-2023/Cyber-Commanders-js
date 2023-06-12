import React from "react";
import Extras from "./Extras";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";

export default function LogicaExtras() {

    return(
        <>
            <CartProvider>
                <Extras></Extras>
                <Cart></Cart>
            </CartProvider>
        </>
    );
}