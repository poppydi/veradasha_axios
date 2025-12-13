import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img 
          src="img/a.png" 
          alt="Mercado Libre" 
          className={styles.logo}
        />
        <input 
          type="text" 
          placeholder="Buscar productos, marcas y más..." 
          className={styles.searchInput}
        />
      </div>

      <nav className={styles.nav}>
        <a href="#">Ingresa tu domicilio</a>
        <a href="#">Categorías</a>
        <a href="#">Ofertas</a>
        <a href="#">Historial</a>
        <a href="#">Supermercado</a>
        <a href="#">Moda</a>
        <a href="#">Vender</a>
        <a href="#">Ayuda / PQR</a>
      </nav>

      <div className={styles.authSection}>
        <button className={styles.subscribeBtn}>
          Suscríbete a nivel por solo $17.899
          <span className={styles.badge}>6</span>
        </button>
        <div className={styles.links}>
          <span>Crea tu cuenta</span>
          <a href="#">Ingresa</a>
          <a href="#">Mis compras</a>
        </div>
        <div className={styles.cart}>🛒</div>
      </div>
    </header>
  );
};

export default Header;