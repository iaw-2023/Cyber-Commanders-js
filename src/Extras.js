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
    <div className='container-items'>
			{Array.isArray(extras)
                ? extras.map( extra => {
                    return(
                    <div className='item' key={extra.id}>
                    <figure>
                      <img src={"https://www.infobae.com/new-resizer/EtGmhBt5kJBjkMvnFTiziNUTu_I=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/ZTCBDSR5DVBNJPMMDYTSUKAGPE.jpg"} alt={extra.producto} />
                    </figure>
                    <div className='info-product'>
                      <h2>{extra.producto}</h2>
                      <p className='tipo'>{extra.tamaño}</p>
                      <button >
                        Precio: $ {extra.precio} 
                      </button>
                    </div>
                  </div>);
                }) 
            :null }
	</div>
  );
}