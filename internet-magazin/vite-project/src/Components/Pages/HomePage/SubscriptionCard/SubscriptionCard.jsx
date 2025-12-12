import React from 'react';
import styles from './SubscriptionCard.module.css';

const SubscriptionCard = () => {
  return (
    <div className={styles['subscription-card']}>
      <div className={styles['card-header']}>
        <h2>Suscríbete al nivel 6</h2>
        <div className={styles['price-container']}>
          <span className={styles['original-price']}>$56.690</span>
          <span className={styles['current-price']}>$17.899 /mes</span>
        </div>
      </div>
      <div className={styles['card-body']}>
        <p className={styles['benefits-title']}>Consigue los mejores beneficios en Mercado Libre</p>
        <div className={styles['benefits-list']}>
          <div className={styles['benefit-item']}>
            <img src="img/div.png" alt="Disney+" className={styles['benefit-icon']} />
            <span>Disney+ sin cargo</span>
          </div>
          <div className={styles['benefit-item']}>
            <img src="img/div-1.png" alt="Star+" className={styles['benefit-icon']} />
            <span>Star+ sin cargo</span>
          </div>
          <div className={styles['benefit-item']}>
            <img src="img/div-2.png" alt="Envíos" className={styles['benefit-icon']} />
            <span>Envíos gratis y rápidos desde $90.000 y 40% OFF en envíos de menos de $90.000</span>
          </div>
        </div>
      </div>
      <div className={styles['card-footer']}>
        <button className={styles['subscribe-button']}>Suscríbete</button>
      </div>
    </div>
  );
};

export default SubscriptionCard;