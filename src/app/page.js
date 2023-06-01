"use client"
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Peliculas from "./peliculas/page";
import Funciones from "./funciones/page";

export default function App (){
  return (
    <div>
      <head>
        <title>Cine</title>
        <link rel="icon" href="/pro.ico"/>
      </head>
      <RootLayout>
        <Routes>
          <Route path="/" element={ <Peliculas/>}></Route>
          <Route path="/funciones" element={ <Funciones/>}></Route>
        </Routes>
      </RootLayout>
    </div>

  );
}
