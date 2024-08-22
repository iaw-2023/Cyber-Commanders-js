

import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "././CSS/Navbar.module.css"; // Importa el módulo CSS
import { LoginButton, LogoutButton } from "./componentes/Auth0Buttons";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth0();

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src="https://vxhbrvoxntfzyholqegd.supabase.co/storage/v1/object/public/images/CINELOGO.png"
          className={styles.logo}
          alt="logo"
        />
      </Link>
      <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`} ref={navRef}>
        <Link  to="/" className={styles.navLink}>
          Inicio
        </Link>
        <Link to="/peliculas" className={styles.navLink}>
          Peliculas
        </Link>
        <Link to="/funciones" className={styles.navLink}>
          Funciones
        </Link>
        <Link to="/salas" className={styles.navLink}>
          Salas
        </Link>
        {isAuthenticated && (
          <Link to="/misCompras" className={styles.navLink}>
            Mis compras
          </Link>
        )}
        <button aria-label="open menu" className={styles.navbarButton} onClick={toggleNavbar}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </nav>
    </header>
  );
}

export default Navbar;
