
import React from 'react';
import styles from './Banner.module.css';

const PromoBanner = () => {
  return (
    <div className={styles.banner}>

      <div className={styles.pagination}>
        <span className={styles.dotActive}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
};

export default PromoBanner;