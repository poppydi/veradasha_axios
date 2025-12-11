
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <nav className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Trabaja con nosotros</a>
          <a href="#" className={styles.navLink}>Términos y condiciones</a>
          <a href="#" className={styles.navLink}>Cómo cuidamos tu privacidad</a>
          <a href="#" className={styles.navLink}>Accesibilidad</a>
          <a href="#" className={styles.navLink}>Ayuda / PQR</a>
          <a href="https://www.sic.gov.co" className={styles.navLink}>www.sic.gov.co</a>
        </nav>
        <div className={styles.copyright}>
          Copyright © 1999-2023 MercadoLibre Colombia LTDA.
          <br />
          Carrera 17 Número 93 - 09 Piso 3, Bogotá D.C., Colombia
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
        <div className={styles.badges}>
          <img 
            src="img/pum.png.png" 
            alt="Superintendencia de Industria y Comercio"
            className={styles.badge}
          />
          <img 
            src="img/sic.png.png" 
            alt="Precio por unidad de medida ¡Pare y Compare!"
            className={styles.badge}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;