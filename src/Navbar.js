import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./CSS/navbar.css";
import {LoginButton,LogoutButton} from "./componentes/Auth0Buttons";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const navRef = useRef();
  const { isAuthenticated } = useAuth0();

  const showNavbar = () => {
    const nav = navRef.current;
    nav.style.top = nav.style.top === "-100%" ? "0" : "-100%";
  };

  return (
    <header>
      <Link to="/">
        <img
          src="https://vxhbrvoxntfzyholqegd.supabase.co/storage/v1/object/public/images/CINELOGO.png"
          className="h-10"
          alt="logo"
        />
      </Link>
      <nav ref={navRef}>
        <Link to="/">
          <p className="text-md text-black hover:text-gray-700">Inicio</p>
        </Link>
        <Link to="/peliculas">
          <p className="text-md text-black hover:text-gray-700">Peliculas</p>
        </Link>
        <Link to="/funciones">
          <p className="text-md text-black hover:text-gray-700">Funciones</p>
        </Link>
        <Link to="/salas">
          <p className="text-md text-black hover:text-gray-700">Salas</p>
        </Link>
        <button className="navbar-button navbar-close" onClick={showNavbar}>
          <FaTimes />
        </button>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </nav>
      <button className="navbar-button" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
