import React from "react";
import ItemCard from "./componentes/ItemCard";

const AllITemCards = () => {
    return(
        <>
            <h1 className="text-center mt-3"> All items</h1>
            <section className="py-4 container" >
                <div className="row justify-content-center">
                    <ItemCard img="" title="title" decs="desc"></ItemCard>
                </div>

            </section>
        </>
    );

}

export default AllITemCards;