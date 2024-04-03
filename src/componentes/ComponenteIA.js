import { React, useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const ComponenteIA = ({ onPeliculaObtenida }) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDAbWk_WzOlLusrx01ZJ-vYVSfzuheOL_Q"
  );

  const [search, setSearch] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [peliculas, setPeliculas] = useState([]);
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://cyber-commanders-laravel.vercel.app/rest/peliculasPorNombre"
      )
      .then((response) => setPeliculas(JSON.stringify(response.data)))
      .catch((error) => console.error(error));
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Necesito que para esta busqueda ${search}, me des la pelicula mas idonea de esta lista ${peliculas}. Necesito que la respuesta sea solo el nombre de una pelicula de la lista, ya que voy a usar tu respuesta para hacer una consulta a una API.  `;
      const response = (await model.generateContent(prompt)).response;
      const text = response.text;
      setResponse(text);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (aiResponse !== "") {
      // Solo si aiResponse no está vacío
      async function getPelicula() {
        try {
          const encodedResponse = encodeURIComponent(aiResponse);
          const url = `https://cyber-commanders-laravel.vercel.app/rest/peliculas/${encodedResponse}`;
          const peli = await axios.get(url);
          setPelicula(peli.data);
          if (onPeliculaObtenida) {
            onPeliculaObtenida(peli.data); // Pasar la película al componente padre
          }
        } catch (error) {
          console.error("Error al obtener la película:", error);
        }
      }

      getPelicula();
    } else {
      setPelicula(null);
      onPeliculaObtenida(null);
    }
  }, [aiResponse]); // Ejecutar solo cuando aiResponse cambie

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    fetchData();
  };

  const handleVolverButton = () => {
    setResponse("");
  };

  return (
    <div>
      <h1 className="m-4 p-4 text-4xl text-gray-700">Nuevo!</h1>
      <h2 className=" text-2xl text-gray-700">
        No sabes que ver? Usa la IA para buscar una pelicula de acuerdo a tus
        gustos
      </h2>
      <div>
        <div className="m-2 relative w-72  h-10">
          <input
            className="peer w-full h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-purple-500"
            placeholder="Ingresa aqui tu busqueda"
            onChange={(e) => handleChangeSearch(e)}
          />
        </div>
        <button
          type="button"
          className="m-2 p-2 content-center align-center border border-gray-100 bg-black hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-900 py-2 px-4  rounded"
          onClick={() => handleClick()}
        >
          Buscar
        </button>
        <button
          type="button"
          className="m-2 p-2 content-center align-center border border-gray-100 bg-black hover:bg-gray-100 text-gray-100 font-semibold hover:text-gray-900 py-2 px-4  rounded"
          onClick={() => handleVolverButton()}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ComponenteIA;
