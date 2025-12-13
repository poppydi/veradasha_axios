import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import PaymentSection from './PaymentSection/PaymentSection';
import OffersCarousel from './OffersCarousel/OffersCarousel';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';
import PopularCategories from './PopularCategories/PopularCategories';
import BenefitsSection from './BenefitsSection/BenefitsSection';
import styles from './HomePage.module.css'; 

const HomePage = () => {
  return (
    <div>
      <main>
        <Banner />
        <PaymentSection /> 
         
        <OffersCarousel />
        <div className={styles.createProductButtonContainer}>
          <Link to="/create" className={styles.createProductButton}>
            Создать новый товар
          </Link>
        </div>
        <SubscriptionCard />
        <PopularCategories />
        <BenefitsSection />
      
      </main>
    </div>
  );
};

export default HomePage;