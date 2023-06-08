import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Extras() {
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/extras")
      .then((response) => setExtras(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return(
    <div >
			{Array.isArray(extras)
                ? extras.map( extra => {
                    return <h2>{extra.producto}</h2>
                }) 
            :null }
	</div>
  );
}