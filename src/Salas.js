import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroSala from "./componentes/CuadroSala";
import CircularProgress from "@mui/material/CircularProgress";

export default function Salas() {
  const [salas, setSalas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/salas")
      .then((response) => {
        setSalas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full bg-black">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className=" text-center ">
            <h1 className="text-gray-100 text-4xl p-3 ">NUESTRAS SALAS</h1>
          </div>
          <div className="w-screen py-6 bg-black flex items-center justify-center flex-wrap">
            {salas.map((sala) => (
              <CuadroSala sala={sala} key={sala.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
