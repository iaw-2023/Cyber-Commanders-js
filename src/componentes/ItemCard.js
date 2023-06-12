import React from "react";

const ItemCard = (props) =>{

    return(
        <div>
            <div class="card" >
                <img src="" class="card-img-top" alt=""></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class= "tn btn-success"> Add to card</button>
                </div>
            </div>
        </div>
    );

};

export default ItemCard;