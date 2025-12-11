
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './OffersCarousel.module.css';

const OffersCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://torguisam.ru/api/product/oksei-all-products'
        );
        const firstFive = response.data.slice(0, 5);
        setProducts(firstFive);
        setLoading(false);
      } catch (err) {
        setError('Не удалось загрузить товары');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className={styles.offersSection}>
        <h2>Ofertas</h2>
        <div className={styles.loading}>Загрузка...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.offersSection}>
        <h2>Ofertas</h2>
        <div className={styles.error}>Ошибка: {error}</div>
      </section>
    );
  }

  return (
    <section className={styles.offersSection}>
      <div className={styles.header}>
        <h2>Ofertas</h2>
        <a href="#" className={styles.viewAll}>Ver todas</a>
      </div>

      <div className={styles.carouselContainer}>
        <button className={styles.navButton} aria-label="Previous">
          <span>‹</span>
        </button>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {product.images && product.images[0] ? (
                <img
                  src={product.images[0]}
                  alt={product.name || `Producto ${product.id}`}
                  className={styles.productImage}
                />
              ) : (
                <div className={styles.placeholder}>No image</div>
              )}
              <h3 className={styles.productName}>{product.name || 'Без названия'}</h3>
              <p className={styles.productDescription}>
                {product.description && product.description.length > 80
                  ? product.description.substring(0, 80) + '...'
                  : product.description || 'Описание отсутствует'}
              </p>
            </div>
          ))}
        </div>

        <button className={styles.navButton} aria-label="Next">
          <span>›</span>
        </button>
      </div>
    </section>
  );
};

export default OffersCarousel;