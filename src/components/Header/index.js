import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>NatanFlix</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Pesquisar</Link>
        <Link to="/favorites">Favoritos</Link>
      </nav>
    </header>
  );
}

export default Header;
