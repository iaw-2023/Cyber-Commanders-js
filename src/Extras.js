import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroExtra from "./componentes/CuadroExtra";

export default function Extras() {
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/extras")
      .then((response) => setExtras(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return(
    <>
      <section className="container-items">
        {Array.isArray(extras)
                  ? extras.map( (extra, index) => {
                      return(
                        <CuadroExtra 
                          key={extra.id} 
                          producto={extra.producto}  
                          tamaño={extra.tamaño}  
                          precio={extra.precio} 
                          item={extra}>
                        </CuadroExtra>
                      );
                  }) 
              :null }
      </section>
    </>
  
  );
}