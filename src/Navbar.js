import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./CSS/navbar.css";

function Navbar() {
  const navRef = useRef();

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
          <p className="text-md text-gray-700 hover:text-gray-900">Inicio</p>
        </Link>
        <Link to="/peliculas">
          <p className="text-md text-gray-700 hover:text-gray-900">Peliculas</p>
        </Link>
        <Link to="/funciones">
          <p className="text-md text-gray-700 hover:text-gray-900">Funciones</p>
        </Link>
        <Link to="/salas">
          <p className="text-md text-gray-700 hover:text-gray-900">Salas</p>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
