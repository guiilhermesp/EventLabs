import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Events</Link>
        {location.pathname === "/" && (
          <Link to="/registerEvent">Create event</Link>
        )}
        <Link to="/tickets">Tickets</Link>
      </nav>
    </header>
  );
};

export default Header;
