import React from "react";
import {useCart} from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();


    if (isEmpty) return <h1 className="text-center">Tu carrito esta vacio</h1>

    return(
        <section className="container-items">
            <div className="row justify-content-center ">
                <div col-12>
                    <h5> Cart ({totalUniqueItems}) Total items: ({totalItems})</h5>
                </div>
            </div>
        </section>
    );

};

export default Cart;