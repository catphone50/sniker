import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Сникер - магазин</h1>
        <nav className={styles.containerNav}>
          <NavLink
            className={styles.nav}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Главная
          </NavLink>
          <NavLink
            className={styles.nav}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Корзина
          </NavLink>
          <NavLink
            className={styles.nav}
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
