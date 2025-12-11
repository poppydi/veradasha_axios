import React from 'react';
import styles from './PaymentSection.module.css';

const PaymentSection = () => {
  return (
    <section className={styles.paymentSection}>
      <div className={styles.option}>
        <div className={styles.icon}>💳</div>
        <div>
          <div className={styles.title}>Hasta 48 cuotas</div>
          <div className={styles.link}>Ver más</div>
        </div>
      </div>
      <div className={styles.option}>
        <div className={styles.icon}>🏦</div>
        <div>
          <div className={styles.title}>Transferencia desde tu banco</div>
          <div className={styles.link}>Ver más</div>
        </div>
      </div>
      <div className={styles.option}>
        <div className={styles.icon}>💵</div>
        <div>
          <div className={styles.title}>Paga en efectivo</div>
          <div className={styles.link}>Ver más</div>
        </div>
      </div>
      <div className={styles.option}>
        <div className={styles.icon}>➕</div>
        <div>
          <div className={styles.title}>Más medios de pago</div>
          <div className={styles.link}>Ver todos</div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;