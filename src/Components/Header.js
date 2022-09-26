import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/tickets" className={styles.link}>
          Tickets
        </Link>
        <Link to="/" className={styles.link}>
          Events
        </Link>
        {location.pathname === "/" && (
          <Link to="/registerEvent" className={styles.link}>
            Create event
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
