import React from 'react';
import styles from './BenefitsSection.module.css';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'img/payment.svg.png',
      title: 'Paga con tarjeta o en efectivo',
      description: 'Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!',
      linkText: 'Cómo pagar con Mercado Pago',
      linkHref: '#'
    },
    {
      icon: 'img/protected.svg.png',
      title: 'Envío gratis desde $90.000',
      description: 'Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.',
      linkText: 'Conoce más sobre este beneficio',
      linkHref: '#'
    },
    {
      icon: 'img/shipping.svg.png',
      title: 'Seguridad, de principio a fin',
      description: '¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.',
      linkText: 'Cómo te protegemos',
      linkHref: '#'
    }
  ];

  return (
    <div className={styles['benefits-section']}>
      {benefits.map((benefit, index) => (
        <div key={index} className={styles['benefit-card']}>
          <div className={styles['icon-wrapper']}>
            <img src={benefit.icon} alt={benefit.title} className={styles['benefit-icon']} />
          </div>
          <h3 className={styles['benefit-title']}>{benefit.title}</h3>
          <p className={styles['benefit-description']}>{benefit.description}</p>
          <a href={benefit.linkHref} className={styles['benefit-link']}>
            {benefit.linkText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;