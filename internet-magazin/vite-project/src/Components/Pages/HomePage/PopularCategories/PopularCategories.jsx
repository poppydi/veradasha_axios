import React from 'react';
import styles from './PopularCategories.module.css';

const PopularCategories = () => {
  const categories = [
    { icon: 'img/svg.png', label: 'Carros, Motos y Otros' },
    { icon: 'img/svg-1.png', label: 'Computación' },
    { icon: 'img/svg-2.png', label: 'Ropa y Accesorios' },
    { icon: 'img/svg-3.png', label: 'Hogar y Muebles' },
    { icon: 'img/svg-4.png', label: 'Accesorios para Vehículos' },
    { icon: 'img/svg-5.png', label: 'Electrodomésticos' },
    { icon: 'img/svg-6.png', label: 'Cámaras y Accesorios' },
    { icon: 'img/svg-7.png', label: 'Celulares y Teléfonos' },
    { icon: 'img/svg-8.png', label: 'Belleza y Cuidado Personal' },
    { icon: 'img/svg-9.png', label: 'Deportes y Fitness' },
    { icon: 'img/svg-10.png', label: 'Electrónica, Audio y Video' },
    { icon: 'img/svg-11.png', label: 'Consolas y Videojuegos' },
    { icon: 'img/svg-12.png', label: 'Juegos y Juguetes' },
    { icon: 'img/svg-13.png', label: 'Herramientas' },
  ];

  return (
    <div className={styles['popular-categories']}>
      <h3 className={styles['section-title']}>Categorías populares</h3>
      <div className={styles['categories-grid']}>
        {categories.map((cat, index) => (
          <div key={index} className={styles['category-item']}>
            <img src={cat.icon} alt={cat.label} className={styles['category-icon']} />
            <span className={styles['category-label']}>{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;